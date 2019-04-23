import React, { useState } from "react";

const UseStateDemo = () => {
  const [name, setName] = useState("Hello");
  return <h3>{name}</h3>;
};
export default UseStateDemo;
