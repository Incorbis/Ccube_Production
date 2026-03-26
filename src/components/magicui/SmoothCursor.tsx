"use client";

import { useEffect } from "react";
import cursorImg from "../../assets/cursor.png"; // ✅ only change

const SmoothCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.className =
      "fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999]";

    // ✅ fixed image path
    cursor.style.backgroundImage = `url(${cursorImg})`;
    cursor.style.backgroundSize = "contain";
    cursor.style.backgroundRepeat = "no-repeat";

    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", updateMouse);

    const animate = () => {
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", updateMouse);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default SmoothCursor;