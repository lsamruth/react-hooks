import React, { useState, useEffect } from "react";

const UseStateDemo = () => {
  const [name, setName] = useState("Hello");
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000)
  })
  return <h3>{name} you are active for {timer} seconds</h3>
};
export default UseStateDemo;
