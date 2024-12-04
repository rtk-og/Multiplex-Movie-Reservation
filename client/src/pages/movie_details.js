import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

export const MovieDetails = () => {
  const location = useLocation();
  var viedourl = location.state.viedourl;
  var moviename = location.state.moviename;
  var description = location.state.description;
  var actorname = location.state.actorname;
  var directorname = location.state.directorname;
  var releasedate = location.state.releasedate;
  var outdate = location.state.outdate;

  return (
    <div>
      <Usernavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "900px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">MovieDetails</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <iframe
                  width="400"
                  height="250"
                  className="viedo"
                  src={viedourl}
                  frameBorder="0"
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
                  id="moviename"
                  placeholder={"Movie name :" + " " + " " + moviename}
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
                  id="description"
                  placeholder={"Description :" + " " + " " + description}
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  id="actor"
                  placeholder={"Actorname :" + " " + " " + actorname}
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
                  id="director"
                  placeholder={"Directorname :" + " " + " " + directorname}
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
                  id="startdate"
                  placeholder={"Release date :" + " " + " " + releasedate}
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
                  id="enddate"
                  placeholder={"Out date :" + " " + " " + outdate}
                />
                <span class="focus-input100" />
              </div>
              <br />

              <div class="flex-col-c p-t-40 p-b-40" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
