import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="container mx-auto max-w-screen-xl">{props.children}</div>
  );
};

export default Container;
