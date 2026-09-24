import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const MagneticCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for magnetic trailing feel
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, .interactive, [data-cursor="pointer"]'
      );

      if (interactiveEl) {
        setIsHovering(true);
        const customText = interactiveEl.getAttribute('data-cursor-text');
        setHoverText(customText || null);
      } else {
        setIsHovering(false);
        setHoverText(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          backgroundColor: isHovering ? 'rgba(124, 58, 237, 0.15)' : 'rgba(255, 255, 255, 0.03)',
          borderColor: isHovering ? 'rgba(167, 139, 250, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="rounded-full border border-solid backdrop-blur-[1px] flex items-center justify-center shadow-lg"
      >
        {hoverText && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-violet-300 uppercase select-none">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-white shadow-sm"
      />
    </div>
  );
};
