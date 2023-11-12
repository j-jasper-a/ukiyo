import { globalAnimationVariants } from "@/globalSettings";
import { motion } from "framer-motion";
import Image from "next/image";
import HeadingTertiary from "../common/HeadingTertiary";
import Button from "../common/Button";

const CallToAction = () => {
  return (
    <div className="relative flex aspect-square flex-col items-center justify-center">
      <Image
        src={"/assets/images/contact/exterior.webp"}
        alt="Contact"
        width={1080}
        height={1080}
        className="absolute left-0 top-0 -z-20 object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full bg-dark/80" />
      <motion.div
        variants={globalAnimationVariants}
        initial={"hiddenLeft"}
        whileInView={"visible"}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex w-fit flex-col items-center gap-4 text-center sm:gap-8"
      >
        <HeadingTertiary text="You are invited and welcome." />
        <div>
          <p className="text-sm font-bold uppercase text-brand">Lunch</p>
          <p>11:30 AM - 3:30 PM</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-brand">Dinner</p>
          <p>7:30 PM - 11:30 PM</p>
        </div>
        <Button>Call Us</Button>
      </motion.div>
    </div>
  );
};

export default CallToAction;
