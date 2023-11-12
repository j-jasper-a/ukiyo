type Props = {
  id: number;
  name: string;
  nameJapanese: string;
  description: string;
  price: number;
};

const MenuItem = ({ id, name, nameJapanese, description, price }: Props) => {
  return (
    <div key={id} className="flex flex-row justify-between ">
      <div>
        <p className="text-brand">{name}</p>
        <p className="text-brand opacity-50">{nameJapanese}</p>
        <p className="opacity-75">{description}</p>
      </div>
      <p className="w-fit whitespace-nowrap text-brand">{`৳ ${price}`}</p>
    </div>
  );
};

export default MenuItem;
