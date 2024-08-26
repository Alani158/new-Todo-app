import Fruit from "./fruit";
import Hello from "./hello";
export default function Fruits() {
  //   const Fruits = ["apple", "mango", "banana", "peach"];
  const Person = [
    {
      id: 1,
      name: "kaz",
      message: "hi there ",
      message_two: "welcome ",
      setofnum: [1, 2, 3],
    },
    {
      id: 2,
      name: "kazeem",
      message: "hi there ",
      message_two: "welcome ",
      setofnum: [1, 2, 3],
    },
    {
      id: 3,
      name: "kazeem",
      message: "hi there ",
      message_two: "welcome ",
      setofnum: [1, 2, 3],
    },
    {
      id: 4,
      name: "kaz",
      message: "hi there ",
      message_two: "welcome ",
      setofnum: [1, 2, 3],
    },
  ];
  return (
    <div>
      <ol>
        {Person.map((person) => (
          <li key={person}>
            <Fruit fruit={person} />
            <p>
              <Hello person={person} />{" "}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
