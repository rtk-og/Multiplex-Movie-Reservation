import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

function Screenlist() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    Axios.get(
      "http://localhost:3001/api/screenlist/" + location.state.theatername
    ).then(response => {
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
        Screen List
      </h1>
      <div className="row" style={{ padding: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div className="card" style={{ textAlign: "left" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr98V_S9GnB4faRONqQRlXikxdm33-8Kotkg&s"
                  width="260px"
                  height="350px"
                />
                <br />
                <p style={{ color: "#fff" }}>
                  {val.screenname}
                </p>
                <p style={{ color: "#fff" }}>
                  {val.theateremail}
                </p>
                <button
                  className="btn btn-danger"
                  style={{ width: "85%" }}
                  onClick={() => {
                    navigate("/moviespage", {
                      state: {
                        screenname: val.screenname,
                        theatername: location.state.theatername
                      }
                    });
                  }}
                >
                  Movies
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

export default Screenlist;
