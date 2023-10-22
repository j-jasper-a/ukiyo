/* eslint-disable @next/next/no-img-element */

type Props = {
  name: string;
  message: string;
  position: string;
  imageUrl: string;
};

const Figure = (props: Props) => {
  return (
    <figure className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-darker shadow shadow-black md:flex-row md:gap-0">
      <img
        className="aspect-square w-full object-cover object-top md:aspect-auto md:w-1/2"
        src={props.imageUrl}
        alt={`A photo of ${props.name}`}
      />
      <div className="flex flex-col justify-between gap-8 p-4 md:w-1/2">
        <blockquote>
          <p>
            <span className="pr-1 text-5xl text-brand">{`‶`}</span>
            {props.message}
          </p>
        </blockquote>
        <figcaption>
          <div>{props.name}</div>
          <div className="opacity-50">{props.position}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Figure;
