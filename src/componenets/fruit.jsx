export default function Fruit({ fruit }) {
  return (
    <div>
      {/* {fruit.name} {fruit.id}, {fruit.message}, {fruit.message_two} */}
      {fruit.name === "kaz" ? (
        <h1>
          {fruit.name} {fruit.id}, {fruit.message}, {fruit.message_two}
        </h1>
      ) : (
        <h2>invalid </h2>
      )}
    </div>
  );
}
