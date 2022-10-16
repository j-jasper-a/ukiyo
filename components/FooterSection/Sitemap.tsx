import Link from "next/link";
import Button from "../Buttons/Button";

const Sitemap = () => {
  return (
    <>
      <li>
        <Link href={"/#menu"} scroll={false}>
          <a>{"Menu"}</a>
        </Link>
      </li>
      <li>
        <Link href={"/#our-story"} scroll={false}>
          <a>{"Our Story"}</a>
        </Link>
      </li>
      <li>
        <Link href={"/#reviews"} scroll={false}>
          <a>{"Reviews"}</a>
        </Link>
      </li>
      <li>
        <Link href={"/#visit-us"} scroll={false}>
          <a>{"Visit Us"}</a>
        </Link>
      </li>
    </>
  );
};

export default Sitemap;
