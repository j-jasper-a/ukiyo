type Props = {
  text: string;
};

const HeadingTertiary = ({ text }: Props) => {
  return <h2 className="font-special text-5xl">{text}</h2>;
};

export default HeadingTertiary;
