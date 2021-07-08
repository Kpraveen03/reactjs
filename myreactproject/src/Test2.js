

import React, { useState } from "react";
//import "./CustomerComponent.css";

const INTIAL_DATA = [
  { id: 1, fn: "guru", ln: "prasad" },
  { id: 2, fn: "hari", ln: "prasad" },
  { id: 3, fn: "siva", ln: "prasad" },
];

export const CustomerComponent = () => {
  const [data, setData] = useState(INTIAL_DATA);

  const handleEditClick = (id) => {
    setData((data) => {
      const rowlist = data.map((row) => {
        if (row.id !== id) {
          return row;
        }

        row.fn = row.fn.toLocaleUpperCase();
        row.ln = row.ln.toLocaleUpperCase();
        return row;
      });

      return rowlist;
    });
  };

  const handleDeleteClick = (id) => {
    setData((data) => {
      const rowlist = data.filter((row) => row.id !== id);

      return rowlist;
    });
  };

  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th> <th>Action</th>
        </tr>
        {data.map((rowData, id) => (
          <tr key={id}>
            <td>{rowData.id}</td>
            <td>{rowData.fn}</td>
            <td>{rowData.ln}</td>
            <td>
              <button onClick={() => handleEditClick(rowData.id)}>E</button>
              <button onClick={() => handleDeleteClick(rowData.id)}>D</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};