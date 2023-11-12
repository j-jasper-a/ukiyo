import Link from "next/link";

type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};

const MenuNavigationLink = ({ text, active, onClick }: Props) => {
  return (
    <Link
      href={"#menu"}
      onClick={onClick}
      className={`w-fit border-b-4 text-sm font-bold uppercase ${
        active ? "" : "border-transparent"
      }`}
    >
      <p>{text}</p>
    </Link>
  );
};

export default MenuNavigationLink;
