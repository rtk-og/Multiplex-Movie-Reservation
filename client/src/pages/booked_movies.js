import React, { useState, useEffect } from "react";
import Axios from "axios";
import Adminnavbar from "../navbar/admin_navbar";

function Bookedmovies() {
  const [bookinglist, setbookinglist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/bookedmovies").then(response => {
      setbookinglist(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      {bookinglist.map(data => {
        return (
          <div class="limiter" style={{ marginTop: "2%" }}>
            <div
              class="container-login100"
              style={{ backgroundColor: "transparent", marginTop: "-2%" }}
            >
              <div class="wrap-login100" style={{ height: "770px" }}>
                <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                  <span class="login100-form-title">Booking list</span>

                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      name="username"
                      id="date"
                      placeholder={
                        "Booking date :" + " " + " " + data.bookingdate
                      }
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
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
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Movie name :" + " " + " " + data.moviename}
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Please enter password"
                  >
                    <input
                      class="input100"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      type="password"
                      id="moviewatchers"
                      name="pass"
                      placeholder={
                        "Movie watchers :" + " " + " " + data.moviewatchers
                      }
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
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
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      id="ceatnames"
                      placeholder={"Ceat names :" + " " + " " + data.ceatnames}
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Total cost :" + " " + " " + data.totalcost}
                      id="totalcost"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="theatername"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={
                        "Theater name :" + " " + " " + data.theatername
                      }
                      id="theatername"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="screenname"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={
                        "Screen name :" + " " + " " + data.screenname
                      }
                      id="screenname"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="showtime"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Show time :" + " " + " " + data.showtime}
                      id="showtime"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <br />
                  <div class="flex-col-c p-t-40 p-b-40" />
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bookedmovies;
