/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const LogoSmall = () => {
  return (
    <div className={`group flex items-center gap-4`}>
      <Link href={"/"}>
        <a>
          <img
            className="h-6"
            src="/assets/images/logos/logo-small.png"
            alt="Ukiyo logo"
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <header className="flex flex-col text-3xl uppercase tracking-widest transition duration-300 group-hover:text-brand group-hover:transition">
            <p>Ukiyo</p>
          </header>
        </a>
      </Link>
    </div>
  );
};

export default LogoSmall;
