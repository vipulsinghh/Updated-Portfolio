"use client";
import { useRef, type ReactNode } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  animationClasses?: {
    visible: string;
    hidden: string;
  };
  delay?: string; // e.g., 'delay-200'
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className,
  animationClasses = {
    visible: 'opacity-100 translate-y-0 sm:translate-x-0',
    hidden: 'opacity-0 translate-y-10 sm:translate-x-0', // Default for vertical reveal
  },
  delay = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref, { threshold, triggerOnce });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isOnScreen ? animationClasses.visible : animationClasses.hidden,
        delay,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;
