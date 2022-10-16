type Props = {
  title: string;
  slogan: string;
};

const SectionTitle = (props: Props) => {
  return (
    <header className="flex flex-col items-center justify-center">
      <h2 className="text-2xl uppercase text-brand">{props.title}</h2>
      <p className="opacity-50">{props.slogan}</p>
    </header>
  );
};

export default SectionTitle;
