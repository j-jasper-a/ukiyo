"use client";

/* eslint-disable @next/next/no-img-element */

import { menu } from "../../../DUMMY_DATA";
import Container from "../Layouts/Container";
import SectionTitle from "../Headers/SectionTitle";
import Section from "../Layouts/Section";
import { useState } from "react";
import MenuSegment from "./MenuSegment";
import ButtonSmall from "../Buttons/ButtonSmall";

const MenuSection = () => {
  const [activeMenuSegment, setActiveMenuSegment] = useState(menu.appetizers);

  const menuButtonHandler = (menuSegment: any) => {
    setActiveMenuSegment(menuSegment);
  };

  const activeImageUrl = `url(/assets/images/menu/${activeMenuSegment.name.toLowerCase()}.webp)`;

  return (
    <Section id="menu">
      <SectionTitle title="Menu" slogan="Authenticity & Balance" />
      <Container>
        <div className="mx-auto flex flex-col gap-8">
          <nav>
            <ul className="flex justify-between md:justify-start md:gap-8">
              <li>
                <ButtonSmall
                  name={menu.appetizers.name}
                  isActive={menu.appetizers.name === activeMenuSegment.name}
                  clickHandler={() => menuButtonHandler(menu.appetizers)}
                />
              </li>
              <li>
                <ButtonSmall
                  name={menu.entrees.name}
                  isActive={menu.entrees.name === activeMenuSegment.name}
                  clickHandler={() => menuButtonHandler(menu.entrees)}
                />
              </li>
              <li>
                <ButtonSmall
                  name={menu.sides.name}
                  isActive={menu.sides.name === activeMenuSegment.name}
                  clickHandler={() => menuButtonHandler(menu.sides)}
                />
              </li>
              <li>
                <ButtonSmall
                  name={menu.beverages.name}
                  isActive={menu.beverages.name === activeMenuSegment.name}
                  clickHandler={() => menuButtonHandler(menu.beverages)}
                />
              </li>
            </ul>
          </nav>
          <div
            className="grid grid-cols-1 grid-rows-[3fr_1fr] overflow-hidden rounded-2xl bg-cover bg-center shadow shadow-black sm:grid-cols-2 sm:grid-rows-1"
            style={{ backgroundImage: activeImageUrl }}
          >
            <div className="dark-glass flex flex-col gap-4 p-4 md:p-8">
              {activeMenuSegment.items.map((item) => {
                return (
                  <MenuSegment
                    key={item.id}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MenuSection;
