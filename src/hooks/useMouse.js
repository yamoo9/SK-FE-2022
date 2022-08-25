import { useState, useEffect } from 'react';

export function useMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMousePosition = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener('mousemove', handleMousePosition);
    return () => window.removeEventListener('mousemove', handleMousePosition);
  }, []);

  return mousePosition;
}
