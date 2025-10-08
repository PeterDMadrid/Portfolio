"use client";

import { useState, useRef, useCallback, useEffect, SetStateAction } from 'react';

interface LightEffectProps {
  isLightOn: boolean;
  setIsLightOn: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LightEffect({ isLightOn, setIsLightOn}: LightEffectProps) {
  const [chainPosition, setChainPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const chainRef = useRef(null);
  const PULL_THRESHOLD = 40;
  const MAX_PULL = 60;

  const handleMouseDown = useCallback((e: { clientY: SetStateAction<number>; }) => {
    setIsDragging(true);
    setStartY(e.clientY);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  }, []);

  const handleMouseMove = useCallback((e: { clientY: any; }) => {
    if (!isDragging) return;

    const currentY = e.clientY;
    const pullDistance = Math.max(0, Math.min(MAX_PULL, currentY - startY));
    setChainPosition(pullDistance);
  }, [isDragging, startY]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const pullDistance = Math.max(0, Math.min(MAX_PULL, currentY - startY));
    setChainPosition(pullDistance);
  }, [isDragging, startY]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    // Toggle light if pulled far enough
    if (chainPosition > PULL_THRESHOLD) {
      setIsLightOn(prev => !prev);
    }

    // Reset chain position with smooth animation
    setChainPosition(0);
    setIsDragging(false);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, [isDragging, chainPosition]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;

    // Toggle light if pulled far enough
    if (chainPosition > PULL_THRESHOLD) {
      setIsLightOn(prev => !prev);
    }

    // Reset chain position with smooth animation
    setChainPosition(0);
    setIsDragging(false);
  }, [isDragging, chainPosition]);

  // Add global event listeners using useEffect
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <>
      {/* Light overlay effect */}
      <div
        className={`absolute -top-[11px] left-0 w-full h-full 
          [clip-path:polygon(0_0,100%_10%,100%_100%,40%_100%)] 
          sm:[clip-path:polygon(0_0,100%_33%,100%_100%,10%_100%)] 
          bg-gradient-to-b from-yellow-300/40 from-0% via-yellow-400/20 via-10% to-[#0c2032] to-70% 
          transition-opacity duration-300
          ${isLightOn ? "opacity-100" : "opacity-0"}`}
      />
      
      {/* Light chain */}
      <div className="absolute -top-10 left-[85%] transform -translate-x-1/2 flex flex-col items-center z-20">
        <div
          className="flex flex-col items-center space-y-1 transition-transform duration-200"
          style={{ transform: `translateY(${chainPosition}px)` }}
        >
          {/* Chain Links */}
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="w-2 h-3 border border-gray-400 rounded-sm bg-gray-500"></div>
          ))}

          {/* Handle */}
          <div
            ref={chainRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className={`w-8 h-6 bg-gray-600 rounded-sm cursor-grab active:cursor-grabbing select-none transition-transform duration-200 border border-gray-500 shadow-md hover:bg-gray-500 ${
              isDragging ? 'transform scale-105' : ''
            }`}
          >
            {/* Handle grip lines */}
            <div className="flex flex-col items-center justify-center h-full space-y-px">
              <div className="w-4 h-px bg-gray-400"></div>
              <div className="w-4 h-px bg-gray-400"></div>
              <div className="w-4 h-px bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
