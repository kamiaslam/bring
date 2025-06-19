"use client";
import { useRef, useEffect } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      if (!canvas || !ctx) return;
      
      // Set canvas size
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fill background with light gray
      ctx.fillStyle = "#f5f5f5";
      ctx.fillRect(0, 0, width, height);

      // Only draw circles if footer is not in view
      const footer = document.getElementById('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const isFooterInView = footerRect.top <= window.innerHeight;

      if (!isFooterInView) {
        // Venn diagram layout
        // Center of diagram - moved further right
        const cx = width * 0.75; // Moved more to the right
        const cy = height * 0.5; // Centered vertically
        // Circle radius (adjusted for proper size)
        const r = Math.min(width * 0.28, height * 0.45);
        
        // Adjusted offsets for exact positioning like screenshot
        const offsetX = r * 0.7;
        const offsetY = r * 0.7;

        // Top circle (pink)
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(cx - offsetX * 0.5, cy - offsetY * 0.8, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#f4d5dd"; // Lighter pink
        ctx.fill();

        // Bottom circle (orange)
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(cx - offsetX * 0.5, cy + offsetY * 0.4, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#ff6b45"; // Brighter orange
        ctx.fill();

        // Right circle (sage green)
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(cx + offsetX * 0.7, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#b5c7bc"; // Sage green
        ctx.fill();

        // Reset alpha
        ctx.globalAlpha = 1.0;

        // Draw 'BRING' in the center overlap using the navigation logo style
        const fontSize = Math.floor(r * 0.35); // Slightly smaller for logo style
        ctx.font = `bold ${fontSize}px 'Inter', Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.letterSpacing = "0.1em"; // Add letter spacing like the logo
        ctx.fillText("BRING", cx, cy);
      }
    };

    // Initial render
    handleResize();

    // Add resize and scroll listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
} 