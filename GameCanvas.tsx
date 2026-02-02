
'use client';
import { useEffect, useRef } from 'react';

export default function GameCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext('2d')!;
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    let y = 50;
    function loop() {
      ctx.clearRect(0,0,c.width,c.height);
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.arc(c.width/2, y, 20, 0, Math.PI*2);
      ctx.fill();
      y += 1;
      requestAnimationFrame(loop);
    }
    loop();
  }, []);

  return <canvas ref={ref} />;
}
