import Axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/booking_form.css";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

function Bookingform() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingdate, setbookingdate] = useState("");
  const [showtime, setshowtime] = useState("");
  const releasedate = location.state.releasedate;
  const outdate = location.state.outdate;
  const moviename = location.state.moviename;
  const ticketcost = location.state.ticketcost;
  const theatername = location.state.theatername;
  const screenname = location.state.screenname;

  const selectCeats = e => {
    const username = localStorage.getItem("name");
    e.preventDefault();
    if (
      username === "" ||
      moviename === "" ||
      ticketcost === "" ||
      bookingdate === ""
    ) {
      alert("please select booking date");
    } else {
      navigate("/pickceat", {
        state: {
          moviename: moviename,
          ticketcost: ticketcost,
          bookingdate: bookingdate,
          theatername: theatername,
          screenname: screenname,
          showtime: showtime
        }
      });
    }
  };

  return (
    <div>
      <Usernavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "780px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Book Your Ticket</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={localStorage.getItem("name")}
                  placeholder="Username"
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
                  value={moviename}
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
                  value={ticketcost}
                  name="pass"
                  placeholder="Password"
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
                  type="date"
                  name="username"
                  value={bookingdate}
                  onChange={e => setbookingdate(e.target.value)}
                  max={outdate}
                  min={releasedate}
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
                  value={theatername}
                  placeholder="Username"
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
                  value={screenname}
                  placeholder="Username"
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <select
                  class="input100"
                  type="text"
                  name="username"
                  value={showtime}
                  onChange={e => setshowtime(e.target.value)}
                  placeholder="Pick Show Time"
                >
                  <option value="10.00 AM">10.00 AM</option>
                  <option value="02.00 PM">02.00 PM</option>
                  <option value="06.00 PM">06.00 PM</option>
                  <option value="09.00 PM">09.00 PM</option>
                  <option value="12.00 PM">12.00 PM</option>
                </select>
                <span class="focus-input100" />
              </div>

              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={selectCeats}>
                  Select Seats
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

export default Bookingform;
