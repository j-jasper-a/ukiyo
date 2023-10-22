"use client";

import { useEffect, useState } from "react";
import Container from "../Layouts/Container";
import LogoSmall from "../Logos/LogoSmall";
import LinksList from "./LinksList";

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 75) {
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
    <div
      className={`${
        !isVisible ? "-top-full" : "top-0"
      } dark-glass fixed z-50 hidden w-screen shadow-md shadow-black transition-all duration-300 md:block`}
    >
      <Container>
        <div className={"flex items-center justify-between px-4 py-2 md:px-8"}>
          <LogoSmall />
          <nav>
            <ul className="flex items-center gap-4">
              <LinksList />
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default FloatingNavigation;
