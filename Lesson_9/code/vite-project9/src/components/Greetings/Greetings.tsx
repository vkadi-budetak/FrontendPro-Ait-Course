interface PropsGreetings {
  name: string;
}

function Greetings({ name }: PropsGreetings) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}

export default Greetings;

