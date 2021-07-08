import React, { useState } from "react";

let data = [
  {
    id: 1,
    firstname: "praveen",
    age: 23,
  },
  {
    id: 2,
    firstname: "suresh",
    age: 24,
  },
  {
    id: 3,
    firstname: "prabhas",
    age: 25,
  },
];
export let Test = () => {
  let [state, setState] = useState(data);
  const editEvent = (id) => {
    console.log(id);
    setState((state) => {
      let rowlist = state.filter((row) => {
        if (row.id === id) {
          row.firstname = row.firstname.toUpperCase();
          return row;
          //   console.log(row);
        }
        return row;
        //  console.log(row);
      });
      return rowlist;
      // console.log(rowlist);
    });
  };
  const deleteEvent = (id) => {
    console.log(id);
    setState((state) => {
      let rowlist = state.filter((row) => row.id !== id);
      return rowlist;
    });
  };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>

            <th scope="col">firstname</th>
            <th scope="col">age</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((val, index) => (
            <tr key={index}>
              <th scope="row">{val.id}</th>

              <td>{val.firstname}</td>
              <td>{val.age}</td>
              <td>
                <button
                  type="button"
                  onClick={() => editEvent(val.id)}
                  class="btn btn-primary btn-sm"
                >
                  edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteEvent(val.id)}
                  class="btn btn-secondary btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
//===========================
// import React from "react";

// export
