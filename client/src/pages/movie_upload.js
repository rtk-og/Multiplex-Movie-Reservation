import Axios from "axios";
import React, { useState } from "react";
import "../css/movie_upload.css";
import Adminnavbar from "../navbar/admin_navbar";

function Movieupload() {
  const [movieimageurl, setmovieimageurl] = useState("");
  const [movievideourl, setmovievideourl] = useState("");
  const [moviename, setmoviename] = useState("");
  const [theatername, settheatername] = useState("");
  const [screenname, setscreenname] = useState("");
  const [ticketcost, setticketcost] = useState("");
  const [moviedescription, setmoviedescription] = useState("");
  const [actorname, setactorname] = useState("");
  const [directorname, setdirectorname] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (
      movieimageurl === "" ||
      movievideourl === "" ||
      moviename === "" ||
      theatername === "" ||
      screenname === "" ||
      ticketcost === "" ||
      moviedescription === "" ||
      actorname === "" ||
      directorname === "" ||
      startdate === "" ||
      enddate === ""
    ) {
      alert("please fill all fields");
    } else {
      Axios.post("http://localhost:3001/api/movieupload", {
        movieimageurl: movieimageurl,
        movievideourl: movievideourl,
        moviename: moviename,
        theatername: theatername,
        screenname: screenname,
        ticketcost: ticketcost,
        moviedescription: moviedescription,
        actorname: actorname,
        directorname: directorname,
        startdate: startdate,
        enddate: enddate
      }).then(response => {
        if (response.data == "Movie Added Successfully") {
          alert("Movie Added Successfully");
        }
        setmovieimageurl("");
        setmovievideourl("");
        setmoviename("");
        settheatername("");
        setscreenname("");
        setticketcost("");
        setmoviedescription("");
        setactorname("");
        setdirectorname("");
        setstartdate("");
        setenddate("");
      });
    }
  };

  return (
    <div>
      <Adminnavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "1070px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Add Movies </span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={movieimageurl}
                  onChange={e => setmovieimageurl(e.target.value)}
                  placeholder="Movieimageurl"
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={movievideourl}
                  onChange={e => setmovievideourl(e.target.value)}
                  placeholder="Movievideourl"
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="text"
                  value={moviename}
                  onChange={e => setmoviename(e.target.value)}
                  placeholder="Moviename"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="text"
                  value={theatername}
                  onChange={e => settheatername(e.target.value)}
                  placeholder="Theatername"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="text"
                  value={screenname}
                  onChange={e => setscreenname(e.target.value)}
                  placeholder="Screenname"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={ticketcost}
                  onChange={e => setticketcost(e.target.value)}
                  placeholder="Ticketcost"
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={moviedescription}
                  onChange={e => setmoviedescription(e.target.value)}
                  placeholder="Description"
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={actorname}
                  onChange={e => setactorname(e.target.value)}
                  placeholder="Actorname"
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={directorname}
                  onChange={e => setdirectorname(e.target.value)}
                  placeholder="Directorname"
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="date"
                  name="username"
                  value={startdate}
                  onChange={e => setstartdate(e.target.value)}
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="date"
                  name="username"
                  value={enddate}
                  onChange={e => setenddate(e.target.value)}
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Add Movie
                </button>
              </div>

              <div class="flex-col-c p-t-40 p-b-40" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movieupload;
