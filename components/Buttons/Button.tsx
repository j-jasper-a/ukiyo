import Link from "next/link";

type Props = {
  title: string;
  url: string;
  special: boolean;
};

const Button = (props: Props) => {
  return (
    <Link href={props.url} scroll={false}>
      <a>
        <button
          className={`border-b-4 border-t-4 border-transparent uppercase tracking-widest transition duration-300 hover:border-b-brand hover:transition`}
        >
          {props.title}
        </button>
      </a>
    </Link>
  );
};

export default Button;
