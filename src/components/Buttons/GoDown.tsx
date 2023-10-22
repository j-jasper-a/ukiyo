import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const GoDown = () => {
  return (
    <button>
      <Link href={"#menu"}>
        <ChevronDoubleDownIcon className="w-12 animate-pulse" />
      </Link>
    </button>
  );
};

export default GoDown;
