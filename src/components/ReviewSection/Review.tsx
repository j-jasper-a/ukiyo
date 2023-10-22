type Props = {
  id: number;
  message: string;
  name: string;
};

const Review = (props: Props) => {
  return (
    <div className="grid min-h-[320px] w-auto grid-cols-1 rounded-2xl bg-darker p-4 shadow shadow-black">
      <p>{props.message}</p>
      <p className="self-end text-sm opacity-50">{props.name}</p>
    </div>
  );
};

export default Review;
