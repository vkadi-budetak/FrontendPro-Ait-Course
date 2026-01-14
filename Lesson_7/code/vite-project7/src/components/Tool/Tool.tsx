interface Props {
  paragraph: string;
}

function Tool({ paragraph }: Props) {
  return <div>{paragraph}</div>;
}

export default Tool;
