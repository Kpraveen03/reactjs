import React, { useState } from "react";

const data = [
  {
    id: 1,
    firstname: "praveen",
    lastname: "kumar",
    age: 22,
  },
  {
    id: 2,
    firstname: "naveen",
    lastname: "kumar",
    age: 21,
  },
  {
    id: 3,
    firstname: "suresh",
    lastname: "raina",
    age: 26,
  },
];

export let Test1 = () => {
  let[state,setState] = useState(data);

  const editEvent = (id) => {
   
    console.log(id);
    setState((state) => {
      const rowlist = state.filter((row) => {
        if (row.id === id) {
          row.firstname = row.firstname.toUpperCase();
          row.lastname = row.lastname.toUpperCase();
          return row;
        }
        return row;
      });

      return rowlist;
    });
  };

  const deleteEvent = (id) => {
    setState((state) => {
      const rowlist = state.filter((row) => row.id !== id);
      return rowlist;
      
      
        
    });
    };
  

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">firstname</th>
            <th scope="col">lastname</th>
            <th scope="col">age</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((val, index) => (
            <tr key={index}>
              <th scope="row">{val.id}</th>
              <td>{val.firstname}</td>
              <td>{val.lastname}</td>
              <td>{val.age}</td>
              <td>
                
                  <button
                    type="button"
                    onClick={() => editEvent(val.id)}
                    className="btn btn-primary"
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteEvent(val.id)}
                    className="btn btn-primary"
                  >
                    delete
                  </button>
                
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
};
