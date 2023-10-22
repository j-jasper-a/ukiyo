"use client";

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        !isVisible ? "-right-full bottom-4" : "bottom-4 right-4"
      } fixed bottom-4 right-4 z-20 block md:hidden`}
    >
      <Link href={"/"}>
        <ChevronDoubleUpIcon className="dark-glass w-8 rounded-lg" />
      </Link>
    </button>
  );
};

export default GoToTopButton;
