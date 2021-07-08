import React from 'react';
import "./Images.css";

export const Images = ({ movieList }) => {
  return (
    <>
      {movieList.map((movies, index) => (
        <div className="card" key={index} >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movies.movie}</h5>
            <h4 className="card-text">{movies.director}</h4>
            <a href="#" className="btn btn-primary">TFIMOVIES</a>
          </div>
        </div>
      ))}
    </>


  );
};