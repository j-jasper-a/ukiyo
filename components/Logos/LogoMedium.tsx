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
        <a>
          <p className="text-2xl uppercase tracking-widest">Ukiyo</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <p className="text-3xl tracking-widest">浮 世</p>
        </a>
      </Link>
    </div>
  );
};

export default LogoMedium;
