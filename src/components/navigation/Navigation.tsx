"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "../common/Container";
import NavigationLink from "../common/NavigationLink";
import Logo from "../common/Logo";
import Button, { buttonStyle } from "../common/Button";
import { motion } from "framer-motion";
import { globalLinks } from "@/globalSettings";
import Link from "next/link";

const Navigation = () => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 150) {
      setIsBackgroundVisible(true);
    } else {
      setIsBackgroundVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      layout
      className={`fixed left-0 top-0 z-20 hidden sm:block ${
        isBackgroundVisible ? "bg-dark/80 shadow-md backdrop-blur" : "mt-8"
      }`}
    >
      <Container large>
        <nav className="hidden h-20 grid-cols-3 items-center px-4 sm:px-8 md:grid">
          <Logo white className="h-6" />
          <ul className="flex w-fit flex-row gap-4 justify-self-center whitespace-nowrap font-bold uppercase sm:gap-8">
            {globalLinks &&
              globalLinks.map(({ text, href }) => (
                <NavigationLink key={href} text={text} href={href} />
              ))}
          </ul>
          <Link
            href="/#contact"
            className={`${buttonStyle()} justify-self-end`}
          >
            Book a Table
          </Link>
        </nav>
      </Container>
    </motion.div>
  );
};

export default Navigation;
