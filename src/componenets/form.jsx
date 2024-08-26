import React, { useState } from "react";

export default function Formstuff() {
  const [name, setname] = useState({ firstname: "", Lastname: "mko" });

  //   function Handleclick(e, id) {
  //     const loki = [
  //       {
  //         id: 0,
  //         name: "kaz",
  //         message: "hi there ",
  //         message_two: "welcome ",
  //         setofnum: [1, 2, 3],
  //       },
  //       {
  //         id: 2,
  //         name: "kazeem",
  //         message: "hi there ",
  //         message_two: "welcome ",
  //         setofnum: [1, 2, 3],
  //       },
  //     ];

  //     e.preventDefault();
  //     setname(e.target.value);
  //     loki[id].name = name;
  //     console.log(name);
  //     console.log(loki);
  //   }
  const listitem = ["ml"];
  function arraysha(arr, list, e) {
    e.preventDefault();
    list[0] = arr;
    console.log(list);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setname({ ...name, firstname: e.target.value })}
          value={name.firstname}
        ></input>
        <input
          type="text"
          onChange={(e) => setname({ ...name, Lastname: e.target.value })}
          value={name.Lastname}
        ></input>
        <button onClick={(e) => arraysha(name, listitem, e)}>onChange</button>
      </form>
      <p>
        {name.firstname} {name.Lastname}
      </p>
    </div>
  );
}
