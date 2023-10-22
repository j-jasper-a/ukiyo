import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  clickHandler: () => void;
  isCollapsed: boolean;
};

const MobileMenuButton = (props: Props) => {
  return (
    <button
      className="dark-glass fixed left-4 top-4 z-20 block rounded-lg md:hidden"
      onClick={props.clickHandler}
    >
      {props.isCollapsed ? (
        <Bars3Icon className="h-10 w-10" />
      ) : (
        <XMarkIcon className="h-10 w-10" />
      )}
    </button>
  );
};

export default MobileMenuButton;
