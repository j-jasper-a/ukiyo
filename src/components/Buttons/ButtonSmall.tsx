type Props = {
  name: string;
  isActive: boolean;
  clickHandler: () => void;
};

const ButtonSmall = (props: Props) => {
  return (
    <button
      className={`${
        props.isActive
          ? "border-b-light opacity-100"
          : "border-b-transparent opacity-50"
      } border-b-2 border-t-2 border-transparent text-sm uppercase transition duration-200 hover:active:border-b-light hover:active:transition md:text-base`}
      onClick={props.clickHandler}
    >
      {props.name}
    </button>
  );
};

export default ButtonSmall;
