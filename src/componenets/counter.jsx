import React, { useState } from "react";

export default function Counter() {
  const [Count, setcount] = useState(0);
  const [message, setmessage] = useState("");
  function Handleclick() {
    setcount(Count + 1);
  }
  function DecreaseCount() {
    setcount(Count - 1);
  }
  function Update() {
    let message = "mujeeb";
    setmessage(message);
  }
  return (
    <div>
      <h1> hello The counter is {Count} </h1>
      <h2 onClick={Update}> my name is {message}</h2>
      <button onClick={Handleclick}> increament</button>
      <button onClick={DecreaseCount}> Decreament</button>
    </div>
  );
}
