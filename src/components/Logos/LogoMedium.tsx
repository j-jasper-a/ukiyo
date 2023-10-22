import Link from "next/link";

type Props = {
  clickHandler?: () => void;
};

const LogoMedium = (props: Props) => {
  return (
    <div
      className="flex h-fit w-fit flex-col items-center"
      onClick={props.clickHandler}
    >
      <Link href="/">
        <p className="text-2xl uppercase tracking-widest">Ukiyo</p>
      </Link>
      <Link href="/">
        <p className="text-3xl tracking-widest">浮 世</p>
      </Link>
    </div>
  );
};

export default LogoMedium;
