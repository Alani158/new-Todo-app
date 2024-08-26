function Hello({ person }) {
  if (person.name === "kaz") {
    return (
      <div>
        <h1>
          {person.message_two} {person.name}
        </h1>
        <p> {person.setofnum}</p>
      </div>
    );
  } else if (person.name === "kazeem") {
    return (
      <h1>
        {person.message} {person.name}
      </h1>
    );
  } else return <h1>{person.name}</h1>;
}
export default Hello;
