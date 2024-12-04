import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function Deletemovies() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    Axios.get("http://localhost:3001/api/movielist", {
      params: {
        screenname: location.state.screenname,
        theatername: location.state.theatername
      }
    }).then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "73px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        Theater Movies
      </h1>
      <div className="row" style={{ padding: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div className="card" style={{ textAlign: "left" }}>
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br />
                <button
                  className="btn btn-danger"
                  style={{ width: "85%" }}
                  onClick={() => {
                    Axios.delete("http://localhost:3001/api/deletemovie/", {
                      params: {
                        id: val._id
                      }
                    }).then(response => {
                      if (response.data === "Movie Deleted Successfully") {
                        alert("Movie Deleted Successfully");
                      }
                    });
                  }}
                >
                  Delete
                </button>
              </div>
              <br /> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deletemovies;
