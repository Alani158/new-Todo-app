import Code from "./code";
import Welcome from "./welcome";

export default function Conditional() {
  const person = {
    name: "kaz",
    message: "hi there ",
    message_two: "welcome ",
    setofnum: [1, 2, 3],
  };
  const display = false;
  return display ? <Code person={person} /> : <Welcome person={person} />;
}
