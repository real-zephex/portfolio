"use client";

import { useEffect } from "react";

const Pointer = () => {
  useEffect(() => {
    const pointer = document.getElementById("pointer") as HTMLDivElement;
    
    if (pointer) {
      // Mouse move handler
      const handleMouseMove = (e: MouseEvent) => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          pointer.style.left = `${e.clientX}px`;
          pointer.style.top = `${e.clientY}px`;
        });
      };

      // Click handlers for scale effect
      const handleMouseDown = () => {
        pointer.style.transform = "translate(-50%, -50%) scale(0.8)";
      };

      const handleMouseUp = () => {
        pointer.style.transform = "translate(-50%, -50%) scale(1)";
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return (
    <div
      id="pointer"
      className="fixed z-50 pointer-events-none hidden lg:block w-8 h-8 rounded-full bg-white mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      style={{
        boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.4)",
      }}
    />
  );
};

export default Pointer;
