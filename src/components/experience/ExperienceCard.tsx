"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeadingTertiary from "../common/HeadingTertiary";
import Button, { buttonStyle } from "../common/Button";
import Link from "next/link";

type Props = {
  heading: string;
  tag: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
};

const ExperienceCard = ({
  heading,
  tag,
  text,
  imageSrc,
  imageAlt,
  reversed,
}: Props) => {
  const animationVariants = {
    visible: {
      opacity: 1,
      x: 0,
    },

    hiddenLeft: {
      opacity: 0,
      x: -100,
    },

    hiddenRight: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="grid grid-cols-1 items-center gap-8 overflow-hidden sm:grid-cols-2 sm:gap-16">
      <motion.div
        variants={animationVariants}
        initial={reversed ? "hiddenRight" : "hiddenLeft"}
        whileInView={"visible"}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="aspect-square"
      >
        <Image src={imageSrc} alt={imageAlt} width={1080} height={1080} />
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial={reversed ? "hiddenLeft" : "hiddenRight"}
        whileInView={"visible"}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`flex h-fit flex-col justify-between gap-4 sm:gap-8 ${
          reversed ? "sm:-order-1" : ""
        }`}
      >
        <div className="flex flex-col gap-4 sm:gap-8">
          <p className="font-bold uppercase text-brand">{tag}</p>
          <HeadingTertiary text={heading} />
          <p className="text-lg opacity-75">{text}</p>
        </div>
        <Link href="/#contact" className={buttonStyle()}>
          Discover Ukiyo
        </Link>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
