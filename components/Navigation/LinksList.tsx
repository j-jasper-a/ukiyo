import Button from "../Buttons/Button";
import RedDot from "./RedDot";

const LinksList = () => {
  return (
    <>
      <li>
        <Button title={"Menu"} url={"/#menu"} special={false} />
      </li>
      <RedDot />
      <li>
        <Button title={"Our Story"} url={"/#our-story"} special={false} />
      </li>
      <RedDot />
      <li>
        <Button title={"Reviews"} url={"/#reviews"} special={false} />
      </li>
      <RedDot />
      <li>
        <Button title={"Visit Us"} url={"/#visit-us"} special={true} />
      </li>
    </>
  );
};

export default LinksList;
