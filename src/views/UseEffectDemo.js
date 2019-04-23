import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [status, setStatus] = useState("OFFLINE");
  let INTERVAL = 3000;
  useEffect(() => {
    setTimeout(() => {
      setStatus("ONLINE");
    }, INTERVAL);
  });

  const [title, setTitle] = useState(document.title);
  useEffect(() => {
    document.title = title;
  });

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <h3 style={{ color: status === "OFFLINE" ? "gray" : "green" }}>
        React is : {status}
      </h3>
      <span>
        Update document title here{" "}
        <input value={title} onChange={handleTitleChange} />
      </span>
    </div>
  );
};
export default UseEffectDemo;
