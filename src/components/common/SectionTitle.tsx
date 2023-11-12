type Props = {
  text: string;
};

const SectionTitle = ({ text }: Props) => {
  return (
    <div className="mx-auto mb-8 mt-16 w-fit">
      <p className="font-special text-4xl opacity-50">{text}</p>
    </div>
  );
};

export default SectionTitle;
