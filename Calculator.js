import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const change = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" value={input} name="input" onChange={change} />
      <br />
      {eval(input)}
    </div>
  );
};

export default Calculator;
