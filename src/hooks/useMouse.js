import { useState, useEffect } from 'react';

// 마우스를 브라우저 화면에서 움직이면 움직일 때마다 x, y 마우스 좌표 값을 출력(반환 )
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
