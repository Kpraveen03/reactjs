import React, { useState } from "react";

export const SaiTodoFn = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const handleEvent = (e) => {
    setState(e.target.value);
  };

  const changeValue = (e) => {
    e.preventDefault();
    setData((val) => {
      return [...val, state];
    });
  };

  return (
    <div>
      <form>
        Name: <input type="text" id="nme" name="name" onChange={handleEvent} />
        <button onClick={changeValue}>Enter</button>
      </form>
      <div>
        {data.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </div>
    </div>
  );
};
