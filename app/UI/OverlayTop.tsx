"use client";
import React, { useState, useEffect } from "react";

export default function OverlayTop() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      setIsScroll(scrollPercent >= 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[20%] fixed top-0 bg-gradient-to-b from-[#09090b] z-10 ${
        isScroll ? "block" : "hidden"
      } to-transparent`}
    ></div>
  );
}
