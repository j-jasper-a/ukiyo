const RoundButton = (props: { text: string; left: boolean }) => {
  return (
    <button
      className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-brand text-xl font-bold ${
        props.left ? "left-0" : "right-0"
      }`}
    >
      {props.text}
    </button>
  );
};

export default RoundButton;
