// src/Animation.jsx
import { useEffect, useRef } from 'react';
// import './Animation.css';

function Animation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;
    const particleCount = 250;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: centerX,
        y: centerY,
        angle: Math.random() * 2 * Math.PI,
        radius: Math.random() * 1,
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.5,
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; // Dark background with trailing
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        p.radius += p.speed;
        const px = centerX + Math.cos(p.angle) * p.radius;
        const py = centerY + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 255, ${p.alpha})`;
        ctx.shadowColor = 'rgba(0, 200, 255, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fill();

        if (px < 0 || px > width || py < 0 || py > height) {
          p.radius = 0;
          p.angle = Math.random() * 2 * Math.PI;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export default Animation;
