/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

type Props = {
  className?: string;
  clickHandler?: () => void;
};

const Logo = (props: Props) => {
  return (
    <div
      className={`${props.className} flex items-center gap-4`}
      onClick={props.clickHandler}
    >
      <Link href={"/"}>
        <a>
          <img
            className="h-24"
            src="/assets/images/logos/logo.png"
            alt="Ukiyo logo"
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <header className="flex flex-col text-3xl uppercase tracking-widest">
            <p>Ukiyo</p>
            <p className="text-center text-4xl text-brand">浮 世</p>
          </header>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
