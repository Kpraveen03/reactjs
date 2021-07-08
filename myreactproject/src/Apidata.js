import React from "react";
import axios from "axios";
import "./Apidata.css";

export class Apidata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://showtimes.everyday.in.th/api/v2/movie/")
      .then((Response) => {
        console.log(Response);
        this.setState({
          data: Response.data.results,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container-fluid">
        <div className="row g-2">
          {data.map((val, index) => (
            <div className="col-md-4" key={index}>
              <div className=" border border-2 border-success m-3 text-center">
                <h3>Title: {val.title}</h3>
                <img src={val.images[0].url} alt={val.title} />
                <h3>ID: {val.id}</h3>
                <h3>Language: {val.language}</h3>
                <h3>release_Date: {val.release_date}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
