import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

const NavigationLink = ({ text, href }: Props) => {
  return (
    <li>
      <Link href={href}>
        <p className="border-b-4 border-transparent text-sm transition-all duration-300 hover:border-brand">
          {text}
        </p>
      </Link>
    </li>
  );
};

export default NavigationLink;
