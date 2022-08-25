// vue - composable
// react - hook

import { useState, useEffect } from 'react';

export function useMouse() {
  // mouse { x, y }

  // stateful logic : state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // stateful logic : side effects
  useEffect(() => {
    const handleMousePosition = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    // bind event handling
    window.addEventListener('mousemove', handleMousePosition);

    // cleanup
    // unbind event handling
    return () => window.removeEventListener('mousemove', handleMousePosition);
  }, []);

  return mousePosition; // { x, y }
}
