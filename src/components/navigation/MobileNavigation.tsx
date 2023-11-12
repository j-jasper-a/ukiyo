"use client";

import Container from "../common/Container";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../common/Logo";
import { useState, useCallback, useEffect } from "react";
import { globalLinks } from "@/globalSettings";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 150) {
      setIsBackgroundVisible(true);
    } else {
      setIsBackgroundVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <div
      className={`fixed z-20 sm:hidden ${
        isBackgroundVisible
          ? "bg-dark/80 backdrop-blur transition-all duration-300"
          : ""
      }`}
    >
      <Container className="flex flex-row justify-between p-4">
        <Logo small white className="z-10 h-8" />
        <button onClick={() => setIsOpen(!isOpen)} className="z-10 w-fit">
          {isOpen ? (
            <MdClose className="h-8 w-8" />
          ) : (
            <MdMenu className="h-8 w-8" />
          )}
          {/* <MdMenu className="h-8 w-8" /> */}
        </button>
      </Container>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-0 flex h-screen flex-col items-center justify-center gap-8 bg-dark duration-300"
          >
            {globalLinks.map(({ text, href }) => (
              <Link
                href={href}
                key={text}
                className="w-fit text-2xl uppercase"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
