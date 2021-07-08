import React from "react";

export const Container = (props) => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col border border-3 border-dark p-5">{props.children}</div>
      </div>
    </div>
  );
};
