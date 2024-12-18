"use client"
import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const redirectLink = "https://glstrck.com/aff_c?offer_id=446&aff_id=11848&source=nests";
  const [viewportHeight, setViewportHeight] = useState("100vh");

  // Handle mobile viewport height issues
  useEffect(() => {
    const updateHeight = () => {
      // Use the actual viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="relative w-screen cursor-pointer bg-black"
      style={{ height: viewportHeight }}
      onClick={handleClick}
    >
      {/* Safe Area Padding for Mobile */}
      <div className="absolute inset-0 px-safe py-safe">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, rgba(76, 0, 255, 0.15), rgba(255, 0, 128, 0.15))"
            }}
          />
          <div className="absolute inset-0 backdrop-blur-2xl bg-black bg-opacity-30" />
        </div>

        {/* Background Image Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/amzn.png"
            alt="Background"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>

        {/* Clickable Overlay */}
        <div className="absolute inset-0 z-10" />
      </div>

      {/* NoScript Fallback */}
      <noscript>
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center z-20">
          Please enable JavaScript to view this content.
        </div>
      </noscript>
    </div>
  );
}