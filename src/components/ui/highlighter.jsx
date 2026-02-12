import { useEffect, useRef } from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false
}) {
  const elementRef = useRef(null)
  const annotationRef = useRef(null)
  const resizeObserverRef = useRef(null)
  const timeoutRef = useRef(null)
  const checkPositionRef = useRef(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    // Check if element or parent has CSS transforms
    const hasActiveTransforms = (el) => {
      if (!el) return false
      const style = window.getComputedStyle(el)
      const transform = style.transform
      // Check if transform is not 'none' and not just identity matrix
      if (transform && transform !== 'none') {
        // Check if it's not just translate(0px, 0px) or matrix(1, 0, 0, 1, 0, 0)
        const matrixMatch = transform.match(/matrix\(([^)]+)\)/)
        if (matrixMatch) {
          const values = matrixMatch[1].split(',').map(v => parseFloat(v.trim()))
          // Identity matrix is [1, 0, 0, 1, 0, 0]
          const isIdentity = Math.abs(values[0] - 1) < 0.01 && 
                            Math.abs(values[1]) < 0.01 && 
                            Math.abs(values[2]) < 0.01 && 
                            Math.abs(values[3] - 1) < 0.01 &&
                            Math.abs(values[4]) < 0.01 && 
                            Math.abs(values[5]) < 0.01
          if (!isIdentity) return true
        } else {
          // Not a matrix, might be translate/scale/rotate
          if (!transform.includes('translate(0px, 0px)') && 
              !transform.includes('translate(0, 0)') &&
              !transform.includes('scale(1)') &&
              !transform.includes('rotate(0deg)')) {
            return true
          }
        }
      }
      // Check parent
      if (el.parentElement) {
        return hasActiveTransforms(el.parentElement)
      }
      return false
    }

    const createAnnotation = () => {
      // Double check element still exists
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      
      // Ensure element is visible and has dimensions
      if (rect.width === 0 || rect.height === 0) {
        // Element not ready, try again
        checkPositionRef.current = setTimeout(createAnnotation, 100)
        return
      }

      // Check if element or parent still has active transforms (animations running)
      if (hasActiveTransforms(elementRef.current)) {
        // Still animating, wait a bit more
        checkPositionRef.current = setTimeout(createAnnotation, 100)
        return
      }

      // Remove any existing annotation first
      if (annotationRef.current) {
        annotationRef.current.remove()
        annotationRef.current = null
      }

      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      // Create annotation - wait one more frame to ensure layout is final
      requestAnimationFrame(() => {
        if (!elementRef.current) return
        
        const annotation = annotate(elementRef.current, annotationConfig)
        annotationRef.current = annotation
        annotation.show()
      })

      // Set up resize observer
      resizeObserverRef.current = new ResizeObserver(() => {
        if (annotationRef.current && elementRef.current) {
          annotationRef.current.hide()
          // Recalculate position after resize
          requestAnimationFrame(() => {
            if (annotationRef.current) {
              // Remove and recreate to ensure correct position
              annotationRef.current.remove()
              const rect = elementRef.current.getBoundingClientRect()
              if (rect.width > 0 && rect.height > 0) {
                const newAnnotation = annotate(elementRef.current, annotationConfig)
                annotationRef.current = newAnnotation
                newAnnotation.show()
              }
            }
          })
        }
      })

      resizeObserverRef.current.observe(elementRef.current)
      resizeObserverRef.current.observe(document.body)
    }

    // Wait for window to be fully loaded, then start checking
    const startChecking = () => {
      // Wait a bit for initial render, then start checking
      if (checkPositionRef.current) {
        clearTimeout(checkPositionRef.current)
      }
      checkPositionRef.current = setTimeout(() => {
        createAnnotation()
      }, 500)
    }

    let loadHandler = null
    if (window.document.readyState === 'complete') {
      startChecking()
    } else {
      loadHandler = startChecking
      window.addEventListener('load', loadHandler, { once: true })
      // Also start checking after a delay as fallback
      checkPositionRef.current = setTimeout(startChecking, 2000)
    }

    const timeoutId = timeoutRef.current
    const checkPositionId = checkPositionRef.current
    return () => {
      if (loadHandler) {
        window.removeEventListener('load', loadHandler)
      }
      if (checkPositionId) {
        clearTimeout(checkPositionId)
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }
      if (annotationRef.current) {
        annotationRef.current.remove()
        annotationRef.current = null
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline bg-transparent">
      {children}
    </span>
  );
}
