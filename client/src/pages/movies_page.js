import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";
import "../css/movielist.css";

function Moviespage() {
  const [movielist, setmovielist] = useState([]);
  const [searchkey, setsearchkey] = useState("");
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
      <Usernavbar />
      <br />
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "112px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        New Releases
      </h1>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search by movie name"
        value={searchkey}
        onChange={e => setsearchkey(e.target.value)}
        style={{ padding: "10px", width: "50%" }}
      />
      <div className="row" style={{ paddingLeft: "50px" }}>
        <br />

        {movielist
          .filter(val => {
            if (searchkey == "") {
              return val;
            } else if (
              searchkey.toLowerCase().includes(val.moviename) ||
              searchkey.toUpperCase().includes(val.moviename)
            ) {
              return val;
            }
          })
          .map(val => {
            return (
              <div className="column">
                <div class="card">
                  <img src={val.movieimageurl} width="260px" height="350px" />
                  <br />
                  <button
                    className="btn btn-warning"
                    style={{ width: "80%" }}
                    onClick={() => {
                      navigate("/moviedetails", {
                        state: {
                          viedourl: val.movievideourl,
                          moviename: val.moviename,
                          description: val.moviedescription,
                          actorname: val.actorname,
                          directorname: val.directorname,
                          releasedate: val.startdate,
                          outdate: val.enddate
                        }
                      });
                    }}
                  >
                    View Details
                  </button>
                  <br />
                  <button
                    className="btn btn-success"
                    style={{ width: "80%" }}
                    onClick={() => {
                      navigate("/bookingform", {
                        state: {
                          releasedate: val.startdate,
                          outdate: val.enddate,
                          moviename: val.moviename,
                          ticketcost: val.ticketcost,
                          theatername: val.theatername,
                          screenname: val.screenname
                        }
                      });
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Moviespage;
