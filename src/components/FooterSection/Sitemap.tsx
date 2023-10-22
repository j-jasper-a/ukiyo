import Link from "next/link";
import Button from "../Buttons/Button";

const Sitemap = () => {
  return (
    <>
      <li>
        <Link href={"/#menu"}>
          <p>{"Menu"}</p>
        </Link>
      </li>
      <li>
        <Link href={"/#our-story"}>
          <p>{"Our Story"}</p>
        </Link>
      </li>
      <li>
        <Link href={"/#reviews"}>
          <p>{"Reviews"}</p>
        </Link>
      </li>
      <li>
        <Link href={"/#visit-us"}>
          <p>{"Visit Us"}</p>
        </Link>
      </li>
    </>
  );
};

export default Sitemap;
