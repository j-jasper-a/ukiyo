"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { MdPhone, MdEmail, MdLocationPin } from "react-icons/md";
import InfoCard from "./InfoCard";
import Image from "next/image";
import HeadingTertiary from "../common/HeadingTertiary";
import { globalAnimationVariants } from "@/globalSettings";
import CallToAction from "./CallToAction";

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle text="Contact" />
      <Container className="px-4 sm:px-8">
        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
          <CallToAction />
          <div className="flex aspect-square flex-col items-center justify-center">
            <motion.div
              variants={globalAnimationVariants}
              initial={"hiddenRight"}
              whileInView={"visible"}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex w-fit flex-col gap-4 text-lg"
            >
              <InfoCard>
                <MdLocationPin className="h-8 w-8 text-brand" />
                <p>
                  12/3, 4th Avenue,
                  <br />
                  Fivetown, Dhaka-6789,
                  <br />
                  Bangladesh{" "}
                </p>
              </InfoCard>
              <InfoCard>
                <MdEmail className="h-8 w-8 text-brand" />
                <p>contact@ukiyo.com</p>
              </InfoCard>
              <InfoCard>
                <MdPhone className="h-8 w-8 text-brand" />
                <p>+880-1234-567890</p>
              </InfoCard>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
