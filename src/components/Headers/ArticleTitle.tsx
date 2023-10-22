type Props = {
  title: string;
};

const ArticleTitle = (props: Props) => {
  return (
    <h3 className="mx-auto text-base uppercase tracking-wider text-brand">
      {props.title}
    </h3>
  );
};

export default ArticleTitle;
