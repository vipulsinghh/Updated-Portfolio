"use client";
import { useState, useEffect, useCallback } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className = "",
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    if (!texts || texts.length === 0) return;
    
    const fullText = texts[textIndex % texts.length];
    if (isDeleting) {
      setCurrentText(fullText.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    } else {
      setCurrentText(fullText.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }

    if (!isDeleting && charIndex === fullText.length -1) { // Start deleting when last char is typed
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => prevIndex + 1);
    }
  }, [charIndex, isDeleting, textIndex, texts, pauseDuration]);


  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed, texts]);

  // Reset charIndex when textIndex changes and not deleting
  useEffect(() => {
    if (!isDeleting) {
      setCharIndex(0);
      setCurrentText("");
    }
  }, [textIndex, isDeleting]);


  return <span className={className}>{currentText}</span>;
};

export default TypingAnimation;
