import { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
};

const Section = (props: Props) => {
  return (
    <section
      id={props.id}
      className="flex flex-col gap-4 px-4 py-4 md:gap-8 md:px-8 md:pb-8 md:pt-16"
    >
      {props.children}
    </section>
  );
};

export default Section;
