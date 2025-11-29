import React, { useState, useEffect } from 'react';

function LightGlowCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [glowClass, setGlowClass] = useState('light-glow');

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorX = event.clientX;
      const cursorY = event.clientY;

      setCursorPosition((prevPosition) => {
        const speed = Math.sqrt(
          Math.pow(cursorX - prevPosition.x, 2) + 
          Math.pow(cursorY - prevPosition.y, 2)
        );

        return { x: cursorX, y: cursorY };
      });

      setGlowClass('light-glow');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${glowClass}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    ></div>
  );
}

export default LightGlowCursor;

