import Link from "next/link";
import LogoMedium from "../Logos/LogoMedium";
import Sitemap from "./Sitemap";

const FooterSection = () => {
  return (
    <footer className="gap-4 border-t-4 border-brand bg-black p-4 md:gap-8 md:p-8">
      <section className="mx-auto grid max-w-screen-xl grid-cols-1 items-center justify-between gap-8 text-sm opacity-75 lg:grid-cols-3">
        <LogoMedium />
        <div className="flex h-full flex-col justify-between text-center">
          <p>All contents of this website are fictional.</p>
          <div>
            <p>This website was created by</p>
            <Link href="https://jaspercode.com">
              <p className="text-lg font-bold">Jihan Jasper Al-rashid</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 text-right">
          <nav>
            <ul>
              <Sitemap />
            </ul>
          </nav>
          <p>Copyright ©️ 2022, Jihan Jasper Al-rashid</p>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
