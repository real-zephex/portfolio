"use client";

import { useEffect } from "react";

const Pointer = () => {
  useEffect(() => {
    const pointer = document.getElementById("pointer") as HTMLDivElement;
    if (pointer) {
      document.addEventListener("mousemove", (e) => {
        pointer.style.left = e.clientX - pointer.offsetWidth / 2 + "px";
        pointer.style.top = e.clientY - pointer.offsetHeight / 2 + "px";
      });
    }
  }, []);

  return (
    <div
      className="w-16 h-16 rounded-full z-10 blur-lg fixed left-0 top-0 pointer-events-none bg-white/50 hidden lg:flex "
      id="pointer"
    ></div>
  );
};

export default Pointer;
