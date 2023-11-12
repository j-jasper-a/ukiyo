type Props = {
  children?: React.ReactNode;
  className?: string;
  large?: boolean;
};

const Container = ({ children, className, large }: Props) => {
  return (
    <div
      className={`container mx-auto ${
        large ? "max-w-screen-2xl" : "max-w-screen-xl"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
