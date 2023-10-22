/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const LogoSmall = () => {
  return (
    <div className={`group flex items-center gap-4`}>
      <Link href={"/"}>
        <img
          className="h-6"
          src="/assets/images/logos/logo-small.png"
          alt="Ukiyo logo"
        />
      </Link>
      <Link href={"/"}>
        <header className="flex flex-col text-3xl uppercase tracking-widest transition duration-300 group-hover:text-brand group-hover:transition">
          <p>Ukiyo</p>
        </header>
      </Link>
    </div>
  );
};

export default LogoSmall;
