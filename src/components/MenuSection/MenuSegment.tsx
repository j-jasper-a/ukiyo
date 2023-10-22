type Props = {
  name: string;
  price: number;
};

const MenuSegment = (props: Props) => {
  return (
    <div className="flex justify-between">
      <p>{props.name}</p>
      <p>
        {props.price} <span className="text-sm opacity-50">BDT</span>
      </p>
    </div>
  );
};

export default MenuSegment;
