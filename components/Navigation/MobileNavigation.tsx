import Link from "next/link";
import { useState } from "react";
import Logo from "../Logos/Logo";
import MobileMenuButton from "./MobileMenuButton";

const MobileNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const menuToggleHandler = () => {
    setIsVisible((previousValue) => !previousValue);
  };

  return (
    <nav>
      <MobileMenuButton
        clickHandler={menuToggleHandler}
        isCollapsed={!isVisible}
      />
      <div
        className={`${
          !isVisible ? "-left-full" : "left-0"
        } dark-glass fixed z-10 flex h-screen w-[80vw] flex-col items-center justify-between py-16 text-xl transition-all duration-300 hover:transition-all`}
      >
        <Logo clickHandler={menuToggleHandler} />
        <ul className="flex flex-col gap-4 p-8">
          <li>
            <Link href={"#menu"} scroll={false}>
              <a>
                <button className="uppercase" onClick={menuToggleHandler}>
                  Menu
                </button>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#our-story"} scroll={false}>
              <a>
                <button className="uppercase" onClick={menuToggleHandler}>
                  Our Story
                </button>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#reviews"} scroll={false}>
              <a>
                <button className="uppercase" onClick={menuToggleHandler}>
                  Reviews
                </button>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#visit-us"} scroll={false}>
              <a>
                <button className="uppercase" onClick={menuToggleHandler}>
                  Visit Us
                </button>
              </a>
            </Link>
          </li>
        </ul>
        <div className="text-center">
          <p className="text-sm opacity-50">Copyright ©️ 2022</p>
          <Link href={"https://jaspercode.com"}>
            <a target={"_blank"}>
              <p className="text-sm">Jihan Jasper Al-rashid</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
