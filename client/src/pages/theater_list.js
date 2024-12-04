import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

function Theaterlist() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/theaterlist").then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Usernavbar />
      <br />
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "73px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        Theater List
      </h1>

      <div className="row" style={{ padding: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div className="card" style={{ textAlign: "left" }}>
                <img src={val.theaterimageurl} width="260px" height="350px" />
                <br />
                <p style={{ color: "#fff" }}>
                  {val.theatername}
                </p>
                <p style={{ color: "#fff" }}>
                  {val.email}
                </p>
                <button
                  className="btn btn-danger"
                  style={{ width: "85%" }}
                  onClick={() => {
                    navigate("/screenlist", {
                      state: {
                        theatername: val.theatername
                      }
                    });
                  }}
                >
                  Screens
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

export default Theaterlist;
