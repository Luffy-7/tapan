"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
  angle: number;
  angleVel: number;
}

export function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      setIsVisible(true);

      // Calculate mouse velocity
      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Create particles based on velocity
      if (velocity > 1) {
        for (let i = 0; i < Math.min(velocity / 5, 8); i++) {
          createParticle(e.clientX, e.clientY, dx, dy);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const createParticle = (x: number, y: number, dx: number, dy: number) => {
      const particle: Particle = {
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: dx * 0.1 + (Math.random() - 0.5) * 2,
        vy: dy * 0.1 + (Math.random() - 0.5) * 2 - 1, // Slight upward drift
        life: 0,
        maxLife: 60 + Math.random() * 40,
        size: 20 + Math.random() * 40,
        opacity: 0.8 + Math.random() * 0.2,
        angle: Math.random() * Math.PI * 2,
        angleVel: (Math.random() - 0.5) * 0.02,
      };
      particlesRef.current.push(particle);
    };

    const drawParticle = (particle: Particle) => {
      const lifeRatio = particle.life / particle.maxLife;
      const opacity = particle.opacity * (1 - lifeRatio) * (isVisible ? 1 : 0);
      const size = particle.size * (1 + lifeRatio * 0.5); // Grow as it ages

      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.angle);

      // Create multiple overlapping circles for a more realistic smoke effect
      const numCircles = 6;
      for (let i = 0; i < numCircles; i++) {
        const circleOpacity = opacity * (0.3 - i * 0.05);
        const circleSize = size * (1 - i * 0.1);
        const offsetX = (Math.random() - 0.5) * size * 0.3;
        const offsetY = (Math.random() - 0.5) * size * 0.3;

        const gradient = ctx.createRadialGradient(
          offsetX,
          offsetY,
          0,
          offsetX,
          offsetY,
          circleSize
        );

        if (isDark) {
          gradient.addColorStop(
            0,
            `rgba(255, 255, 255, ${circleOpacity * 0.6})`
          );
          gradient.addColorStop(
            0.4,
            `rgba(240, 240, 240, ${circleOpacity * 0.4})`
          );
          gradient.addColorStop(
            0.7,
            `rgba(220, 220, 220, ${circleOpacity * 0.2})`
          );
          gradient.addColorStop(1, `rgba(200, 200, 200, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(60, 60, 60, ${circleOpacity * 0.5})`);
          gradient.addColorStop(
            0.4,
            `rgba(80, 80, 80, ${circleOpacity * 0.3})`
          );
          gradient.addColorStop(
            0.7,
            `rgba(100, 100, 100, ${circleOpacity * 0.15})`
          );
          gradient.addColorStop(1, `rgba(120, 120, 120, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, circleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];

        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.angle += particle.angleVel;

        // Apply physics
        particle.vx *= 0.98; // Air resistance
        particle.vy *= 0.98;
        particle.vy -= 0.02; // Buoyancy (smoke rises)

        // Draw particle
        drawParticle(particle);

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(i, 1);
        }
      }

      // Limit particle count for performance
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-100);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDark, isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    />
  );
}
