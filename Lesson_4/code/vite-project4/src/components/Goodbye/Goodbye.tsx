interface PropsGoodbye {
  familyName: string;
  score?: number;
}

function Goodbye({ familyName, score }: PropsGoodbye) {
  return (
    <div>
      <p>
        Goodbye, {familyName}! {score ? `You score is ${score}` : null}
      </p>
    </div>
  );
}

export default Goodbye;
