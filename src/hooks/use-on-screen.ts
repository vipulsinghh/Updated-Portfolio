"use client";
import { type RefObject, useEffect, useState, useMemo } from "react";

interface UseOnScreenOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useOnScreen(
  ref: RefObject<Element>,
  options?: UseOnScreenOptions
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const observerOptions = useMemo(() => {
    return {
      rootMargin: options?.rootMargin || "0px",
      threshold: options?.threshold || 0.1,
    };
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!options?.triggerOnce) {
             setIntersecting(false);
          }
        }
      },
      observerOptions
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, observerOptions, options?.triggerOnce]);

  return isIntersecting;
}
