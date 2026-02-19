import React, { useEffect, useRef } from "react";

const ElectricHydra = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const snakes = Array.from({ length: 3 }, () =>
      Array.from({ length: 15 }, () => ({ x: 0, y: 0 })),
    );
    let mouse = { x: 0, y: 0 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snakes.forEach((points, index) => {
        const offset = (index - 1) * 20;
        points[0].x += (mouse.x + offset - points[0].x) * 0.15;
        points[0].y += (mouse.y + offset - points[0].y) * 0.15;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1],
            p2 = points[i];
          p2.x += (p1.x - p2.x) * (0.4 + index * 0.1);
          p2.y += (p1.y - p2.y) * (0.4 + index * 0.1);
          ctx.lineTo(p2.x, p2.y);
        }
        ctx.strokeStyle = index === 1 ? "white" : "gray";
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  );
};
export default ElectricHydra;
