import React, { useEffect, useRef } from "react";

const ClickEffect = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // Random direction and speed
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * 8 + 2;
        this.vx = Math.cos(angle) * force;
        this.vy = Math.sin(angle) * force;
        this.size = Math.random() * 4 + 2;
        this.life = 1; // 100% opacity
        this.decay = Math.random() * 0.02 + 0.015;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // Slight gravity
        this.vx *= 0.95; // Friction
        this.life -= this.decay;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life})`;
        ctx.beginPath();
        // Sharp, irregular shapes like paper scraps
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size, this.y + this.size);
        ctx.lineTo(this.x - this.size, this.y + this.size);
        ctx.fill();
      }
    }

    const handleClick = (e) => {
      // Create 20 particles per click
      for (let i = 0; i < 20; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.life > 0);
      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousedown", handleClick);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousedown", handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[110]"
    />
  );
};

export default ClickEffect;
