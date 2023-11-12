"use client";

import { useCallback, useEffect, useState } from "react";
import data from "../../../data.json";
import MenuItem from "./MenuItem";
import Container from "../common/Container";
import Section from "../common/Section";
import MenuNavigationLink from "./MenuNavigationLink";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [activeMenuSection, setActiveMenuSection] =
    useState<keyof typeof data.menu>("starters");

  const buttonHandler = useCallback((text: keyof typeof data.menu) => {
    setActiveMenuSection(text);
  }, []);

  const handleScroll = useCallback(() => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      const menuSectionTop = menuSection.offsetTop;
      const menuSectionHeight = menuSection.offsetHeight;
      if (
        window.scrollY >= menuSectionTop + 32 &&
        window.scrollY <= menuSectionTop + menuSectionHeight
      ) {
        setIsBackgroundVisible(true);
      } else {
        setIsBackgroundVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Section id="menu">
      <SectionTitle text="Menu" />
      <motion.div
        className={`sticky left-0 top-16 z-10 origin-left transition-all duration-500 sm:top-20 ${
          isBackgroundVisible
            ? "h-16 border-dark bg-brand text-dark"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-full flex-row items-center justify-center gap-4 sm:gap-8">
          <MenuNavigationLink
            text="Starters"
            active={activeMenuSection === "starters"}
            onClick={() => buttonHandler("starters")}
          />
          <MenuNavigationLink
            text="Entrees"
            active={activeMenuSection === "entrees"}
            onClick={() => buttonHandler("entrees")}
          />
          <MenuNavigationLink
            text="Sides"
            active={activeMenuSection === "sides"}
            onClick={() => buttonHandler("sides")}
          />
          <MenuNavigationLink
            text="Beverages"
            active={activeMenuSection === "beverages"}
            onClick={() => buttonHandler("beverages")}
          />
        </Container>
      </motion.div>
      <AnimatePresence>
        <Container className="grid grid-cols-1 gap-8 overflow-x-hidden px-4 sm:grid-cols-2 sm:gap-16 sm:px-8">
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: -100,
              },
              new: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="aspect-square h-full sm:aspect-[4/1] lg:aspect-auto"
          >
            <Image
              src={`/assets/images/menu/${activeMenuSection}.webp`}
              width={1500}
              height={844}
              alt={`A photo demonstrating ${activeMenuSection} available on the menu`}
              className="h-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: 100,
              },
              new: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {data.menu[activeMenuSection].map(
              ({ id, name, nameJapanese, description, price }) => (
                <MenuItem
                  key={id}
                  id={id}
                  name={name}
                  nameJapanese={nameJapanese}
                  description={description}
                  price={price}
                />
              ),
            )}
          </motion.div>
        </Container>
      </AnimatePresence>
    </Section>
  );
};

export default Menu;
