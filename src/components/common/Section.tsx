type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, id, className }: Props) => {
  return (
    <section
      id={id}
      className={`flex flex-col gap-4 py-4 sm:gap-8 sm:py-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
