import Logo from "../Logos/Logo";
import LinksList from "./LinksList";

const DesktopNavigation = () => {
  return (
    <nav className="hidden w-full items-center justify-between md:flex">
      <Logo />
      <ul className="flex items-center gap-4">
        <LinksList />
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
