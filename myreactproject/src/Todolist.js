// import React, { useState } from "react";
// import "./Todolist.css";
// export let Todolist = () => {
//   const [state, setState] = useState("");
//   let [add, setAdd] = useState([]);
//   let enterName = (e) => {
//     setState(e.target.value);
//   };

//   const clearFormData = document.querySelector("form");
//   let submit = (e) => {
//     e.preventDefault();
//     setAdd((addtionalValue) => {
//       return [...addtionalValue, state];
//     });
//     clearFormData.reset();
//   };

//   return (
//     <>
//       <form>
//         ENTER NAME:
//         <input onChange={enterName} type="name" id="list" />
//         <br />
//         <button onClick={submit}>submit</button>
//       </form>
//       {add.map((val, index) => (
//         <h3 key={index}>{val}</h3>
//       ))}
//     </>
//   );
// };

import React, { useState } from "react";

export let Todolist = () => {
  let [state, setState] = useState("");
  let [add, setAdd] = useState([]);
  let addValue = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };
  let displayValue = (e) => {
    e.preventDefault();
    setAdd((additionalVal) => {
      return [...additionalVal, state];
    });
  };

  return (
    <>
      <form>
        enter name:
        <input type="name" onChange={addValue} />
        <button onClick={displayValue}>submit</button>
      </form>
      {add.map((val, index) => (
        <h2 key={index}>{val}</h2>
      ))}
    </>
  );
};
