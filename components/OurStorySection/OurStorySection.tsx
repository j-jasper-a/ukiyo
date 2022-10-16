/* eslint-disable @next/next/no-img-element */

import SectionTitle from "../Headers/SectionTitle";
import Container from "../Layouts/Container";
import Section from "../Layouts/Section";
import Figure from "./Figure";
import Story from "./Story";

const OurStorySection = () => {
  return (
    <Section id={"our-story"}>
      <SectionTitle title="Our Story" slogan="Magic & Adventure" />
      <Container>
        <Story />
      </Container>
    </Section>
  );
};

export default OurStorySection;
