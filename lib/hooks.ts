import { MutableRefObject, useEffect, useState } from "react";

function useLocalMouse(containerRef: MutableRefObject<null>){
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    if ( containerRef.current === null ) {
      return;
    }

    const container = containerRef.current as HTMLElement;
    let boundingRect = container.getBoundingClientRect();

    const resizeHandler = (event:any) => {
      boundingRect = container.getBoundingClientRect();
    }
    window.addEventListener('resize', resizeHandler);

    const handler = (event:any) => {
      setPosition({x: event.clientX - boundingRect.x, y: event.clientY - boundingRect.y})
    }
    container.addEventListener('mousemove', handler)
    
    return () => {
      container.removeEventListener('mousemove', handler);
      window.removeEventListener('resize', resizeHandler);
    }

  },[containerRef])
  
  return [position.x, position.y];
  
}
export { useLocalMouse };