interface Props {
  onClick: () => void;
  child: React.ReactNode; // унивирсальная запись передачи не только имени , а например иконки
}

function Button({ onClick, child }: Props) {
  // или
  //  const { onClick, child } = props;

  return (
    <button type="button" onClick={onClick}>
      {child}
    </button>
  );
}
export default Button;
