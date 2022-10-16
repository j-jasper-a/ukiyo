import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <button
      className={`${
        !isVisible ? "bottom-4 -right-full" : "bottom-4 right-4"
      } fixed bottom-4 right-4 z-20 block md:hidden`}
    >
      <Link href={"/"}>
        <a>
          <ChevronDoubleUpIcon className="dark-glass w-8 rounded-lg" />
        </a>
      </Link>
    </button>
  );
};

export default GoToTopButton;
