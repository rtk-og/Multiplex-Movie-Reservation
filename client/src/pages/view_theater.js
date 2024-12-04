import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function Viewtheater() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/theaterlist").then(response => {
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
                    navigate("/viewscreen", {
                      state: {
                        theatername: val.theatername
                      }
                    });
                  }}
                >
                  Screens
                </button>
                <button
                  className="btn btn-danger"
                  style={{ width: "85%" }}
                  onClick={() => {
                    Axios.delete("http://localhost:3001/api/deletetheater/", {
                      params: {
                        id: val._id
                      }
                    }).then(response => {
                      if (response.data === "Theater Deleted Successfully") {
                        alert("Theater Deleted Successfully");
                      }
                    });
                  }}
                >
                  Delete Theater
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

export default Viewtheater;
