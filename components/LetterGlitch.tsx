"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

export default function LetterGlitch({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const { resolvedTheme } = useTheme();

  const themeRef = useRef(resolvedTheme);
  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let width = parent.clientWidth;
    let height = parent.clientHeight;
    
    // MOUSE TRACKING
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    // Initial Resize
    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    // Configuration
    const fontSize = 16;
    const columns = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*<>[]{}";
    
    // Grid State
    const grid: { char: string; color: string; changeAt: number; x: number; y: number }[] = [];

    const initGrid = () => {
        grid.length = 0;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                grid.push({
                    char: chars[Math.floor(Math.random() * chars.length)],
                    color: "#333",
                    changeAt: 0,
                    x: x * fontSize,
                    y: y * fontSize
                });
            }
        }
    };
    
    initGrid();

    let frame = 0;
    
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      const isDark = themeRef.current === 'dark';
      
      // COLORS BASED ON THEME
      // Dark Mode: White Hover, Black Vignette
      // Light Mode: Black Hover, White Vignette
      const hoverColor = "#ffffff";
      const vignetteColor1 = isDark ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)";
      const vignetteColor2 = isDark ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)";
      const scanlineColor  = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)";

      for (let i = 0; i < grid.length; i++) {
        const cell = grid[i];
        
        const dx = mouse.x - cell.x;
        const dy = mouse.y - cell.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const hoverRadius = 50; 

        if (dist < hoverRadius) {
            if (frame % 2 === 0) { 
                cell.char = chars[Math.floor(Math.random() * chars.length)];
                cell.color = hoverColor;
            }
        } else if (frame >= cell.changeAt) {
            if (Math.random() < 0.05) { 
                cell.char = chars[Math.floor(Math.random() * chars.length)];
                cell.changeAt = frame + Math.floor(Math.random() * glitchSpeed);
                
                if (Math.random() < 0.1) {
                    cell.color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
                } else {
                    cell.color = "#333";
                }
            }
        }

        ctx.fillStyle = cell.color;
        ctx.fillText(cell.char, cell.x, cell.y);
      }

      // VIGNETTE (Theme Aware)
      if (outerVignette) {
        const gradient = ctx.createRadialGradient(
            width / 2, height / 2, 0, width / 2, height / 2, width * 0.8
        );
        gradient.addColorStop(0, vignetteColor1);
        gradient.addColorStop(1, vignetteColor2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // SCANLINES (Theme Aware)
      if (smooth) {
          ctx.fillStyle = scanlineColor;
          ctx.fillRect(0, (frame * 2) % height, width, 2);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [glitchColors, glitchSpeed, outerVignette, centerVignette, smooth]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}