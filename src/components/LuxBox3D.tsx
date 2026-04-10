"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LuxBox3D() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateX(-y / 10);
    setRotateY(x / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center perspective-[1000px]">
      <motion.div
        className="relative w-64 h-64 cursor-crosshair group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* CSS 3D Cube Structure */}
        <div className="absolute inset-0 bg-primary/95 border border-trust flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all group-hover:bg-trust group-hover:text-primary text-trust" style={{ transform: "translateZ(128px)" }}>
           <span className="font-heading font-bold text-3xl">Farhati</span>
        </div>
        <div className="absolute inset-0 bg-primary/90 border border-trust transition-all group-hover:bg-trust/80" style={{ transform: "rotateY(180deg) translateZ(128px)" }} />
        <div className="absolute inset-0 bg-primary/90 border border-trust transition-all group-hover:bg-trust/80" style={{ transform: "rotateY(90deg) translateZ(128px)" }} />
        <div className="absolute inset-0 bg-primary/90 border border-trust transition-all group-hover:bg-trust/80" style={{ transform: "rotateY(-90deg) translateZ(128px)" }} />
        <div className="absolute inset-0 bg-primary border border-trust transition-all group-hover:bg-trust/80" style={{ transform: "rotateX(90deg) translateZ(128px)" }} />
        <div className="absolute inset-0 bg-primary border border-trust transition-all group-hover:bg-trust/80" style={{ transform: "rotateX(-90deg) translateZ(128px)" }} />
        
        {/* Floating Ring Parallax Element */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: "translateZ(200px)" }}
        >
            <div className="w-80 h-80 border-[1px] border-trust/50 rounded-full animate-[spin_10s_linear_infinite]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
