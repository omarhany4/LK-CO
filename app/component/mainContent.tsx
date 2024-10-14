"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string; // Required prop
  typingSpeed?: number; // Optional prop
  deletingSpeed?: number; // Optional prop
  pauseTime?: number; // Optional prop
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Typing phase
    if (!isDeleting && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    }

    // Pause after typing is complete, then start deleting
    if (!isDeleting && currentIndex === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true); // Start deleting after a pause
      }, pauseTime);
    }

    // Deleting phase
    if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove last character
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
    }

    // Restart the loop after deletion is complete
    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [currentIndex, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
  );
};

export default function MainContent() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div>
      <div className="text-center ">
        <div className="text-4xl font-bold tracking-tight sm:text-6xl">
          <TypingText
            text="Hello, I am Lobna Khaled!"
            typingSpeed={100} // Speed of typing in ms
            deletingSpeed={50} // Speed of deleting in ms
            pauseTime={2000} // Time to pause after typing before erasing
          />
          <span className="blinking-cursor">|</span>
        </div>

        <p className="mt-6 text-m  leading-8 ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex  ">
          <motion.button
            className="flex justify-end mr-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/"
              className="rounded-md bg-skin-primary  px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-skin-secondary hover:text-skin-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </motion.button>
          <motion.button
            className="flex justify-start"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/" className="text-xl font-semibold  text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
