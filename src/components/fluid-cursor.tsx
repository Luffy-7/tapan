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
}

export function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const isMobile = useMobile();
  const [mounted, setMounted] = useState(false);

  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

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

      // Calculate velocity
      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Create fluid particles based on velocity (reduced generation)
      if (velocity > 0.8) {
        for (let i = 0; i < Math.min(Math.floor(velocity / 3), 8); i++) {
          createFluidParticle(
            mouseRef.current.x + (Math.random() - 0.5) * 25,
            mouseRef.current.y + (Math.random() - 0.5) * 25,
            dx * 0.08 + (Math.random() - 0.5) * 1.5,
            dy * 0.08 + (Math.random() - 0.5) * 1.5
          );
        }
      }
    };

    const createFluidParticle = (
      x: number,
      y: number,
      vx: number,
      vy: number
    ) => {
      const particle: Particle = {
        x,
        y,
        vx: vx + (Math.random() - 0.5) * 0.8,
        vy: vy + (Math.random() - 0.5) * 0.8,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        size: 12 + Math.random() * 20,
        opacity: 0.7 + Math.random() * 0.2,
      };
      particlesRef.current.push(particle);
    };

    const updateParticles = () => {
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];

        // Update physics
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Apply fluid dynamics
        particle.vx *= 0.985; // Slightly more friction
        particle.vy *= 0.985;
        particle.vy += 0.015; // Reduced upward drift

        // Add some turbulence (reduced)
        particle.vx += (Math.random() - 0.5) * 0.08;
        particle.vy += (Math.random() - 0.5) * 0.08;

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(i, 1);
        }
      }

      // Reduced particle count limit
      if (particlesRef.current.length > 120) {
        particlesRef.current = particlesRef.current.slice(-120);
      }
    };

    const drawFluidEffect = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set blend mode for fluid effect
      ctx.globalCompositeOperation = isDark ? "screen" : "normal";

      // Draw fluid particles with metaball effect
      for (const particle of particlesRef.current) {
        const lifeRatio = particle.life / particle.maxLife;
        const opacity = particle.opacity * (1 - lifeRatio) * 0.5; // Reduced opacity
        const size = particle.size * (1 + lifeRatio * 0.2);

        // Create fluid-like gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size
        );

        if (isDark) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          gradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.6})`);
          gradient.addColorStop(0.6, `rgba(255, 255, 255, ${opacity * 0.2})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        } else {
          // Changed to beautiful light blue
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
          gradient.addColorStop(0.3, `rgba(96, 165, 250, ${opacity * 0.6})`);
          gradient.addColorStop(0.6, `rgba(147, 197, 253, ${opacity * 0.3})`);
          gradient.addColorStop(1, `rgba(191, 219, 254, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add connecting lines for fluid effect (reduced intensity)
      ctx.globalCompositeOperation = isDark ? "screen" : "normal";
      ctx.lineWidth = 0.8;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            // Reduced connection distance
            const opacity = (1 - distance / 60) * 0.2; // Reduced line opacity
            const lifeRatio1 = p1.life / p1.maxLife;
            const lifeRatio2 = p2.life / p2.maxLife;
            const finalOpacity = opacity * (1 - (lifeRatio1 + lifeRatio2) / 2);

            if (isDark) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity})`;
            } else {
              // Changed to light blue for connections
              ctx.strokeStyle = `rgba(59, 130, 246, ${finalOpacity})`;
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const animate = () => {
      updateParticles();
      drawFluidEffect();
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [mounted, isDark, isMobile]);

  if (!mounted || isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{
        opacity: 0.7, // Slightly reduced overall opacity
        transition: "opacity 0.3s ease-out",
      }}
    />
  );
}
