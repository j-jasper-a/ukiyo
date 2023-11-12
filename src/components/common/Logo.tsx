import Image from "next/image";
import Link from "next/link";

type Props = {
  white?: boolean;
  black?: boolean;
  small?: boolean;
  className?: string;
};

const Logo = ({ white, black, small, className }: Props) => {
  return (
    <Link href={"/"} className={`w-fit ${className}`}>
      <Image
        src={`/assets/images/logos/logo${small ? "-small" : ""}.svg`}
        width={256}
        height={256}
        alt="Logo"
        className={`h-full ${
          white ? "brightness-0 invert" : black ? "brightness-0" : ""
        }`}
      />
    </Link>
  );
};

export default Logo;
