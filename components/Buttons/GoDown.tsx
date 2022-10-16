import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const GoDown = () => {
  return (
    <button>
      <Link href={"#menu"} scroll={false}>
        <a>
          <ChevronDoubleDownIcon className="w-12 animate-pulse" />
        </a>
      </Link>
    </button>
  );
};

export default GoDown;
