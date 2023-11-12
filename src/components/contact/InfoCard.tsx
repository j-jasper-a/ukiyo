type Props = {
  children: React.ReactNode;
};

const InfoCard = ({ children }: Props) => {
  return <div className="flex flex-row gap-4">{children}</div>;
};

export default InfoCard;
