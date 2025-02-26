import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/seat_style.css";
import Usernavbar from "../navbar/user_navbar";
import Axios from "axios";

export const Seatselection = () => {
  const location = useLocation();
  var username = localStorage.getItem("name");
  var mobile = localStorage.getItem("mobile");
  var moviename = location.state.moviename;
  var ticketcost = location.state.ticketcost;
  var bookingdate = location.state.bookingdate;
  var theatername = location.state.theatername;
  var screenname = location.state.screenname;
  var showtime = location.state.showtime;
  var email = localStorage.getItem("email");
  const navigate = useNavigate();
  //console.log(username, mobile, moviename, ticketcost, bookingdate);
  const [name, setname] = useState("");
  const [ceats, setceats] = useState("");
  const allSeatarray = [];

  const startSelect = e => {
    e.preventDefault();
    if (name === "" || ceats === "") {
      alert("please enter name and ceats");
    } else {
      $(".inputForm *").prop("disabled", true);
      $(".seatStructure *").prop("disabled", false);
      $(".title").hide();
      $(".sub-title").hide();
      $(".inputForm *").hide();
      $("#con-select").show();

      document.getElementById("notification").innerHTML =
        "<p class='alert-message'style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</p>";
      Axios.get("http://localhost:3001/api/ceatsbooked/", {
        params: {
          moviename: moviename,
          bookingdate: bookingdate,
          theatername: theatername
        }
      }).then(response => {
        var bookedceats = response.data[0].ceatnames;
        var array = bookedceats.split(",");
        for (var i = 0; i < array.length; i++) {
          alert(array[i]);

          $("#" + array[i]).attr("disabled", true);
        }
      });
    }
  };

  const confirmSelection = () => {
    if ($("input:checked").length == ceats) {
      $(".seatStructure *").prop("disabled", true);
      $("#pay-btn").prop("disabled", false);
      $("#con-select").hide();
      $("#pay-btn").show();
      var allNameVals = [];
      var allNumberVals = [];
      var allSeatsVals = [];

      //Storing in Array
      allNameVals.push(name);
      allNumberVals.push(ceats);
      $("#seatsBlock :checked").each(function() {
        allSeatsVals.push($(this).val());
        allSeatarray.push($(this).val());
      });

      //Displaying
      $("#nameDisplay").val(allNameVals);
      $("#NumberDisplay").val(allNumberVals);
      $("#seatsDisplay").val(allSeatsVals);
    } else {
      alert("Please select " + ceats + " seats");
    }
  };

  useEffect(() => {
    $(".seatStructure *").prop("disabled", true);
    $(".displayerBoxes *").prop("disabled", true);
    $("#pay-btn").hide();
    $("#con-select").hide();

    //$(".booking-pdf").hide();
  }, []);

  const bookingFunction = e => {
    e.preventDefault();
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var fullyear = currentDate.getFullYear();
    var fulldate = day + "-0" + month + "-" + fullyear;
    var ceat = allSeatarray.toString();
    var cost = ticketcost * ceats;
    if (
      moviename === "" ||
      name === "" ||
      ceat === "" ||
      ceats === "" ||
      cost === ""
    ) {
      alert("something went wrong !");
    } else {
      Axios.post("http://localhost:3001/api/booknow", {
        currentdate: fulldate,
        username: username,
        email: email,
        mobile: mobile,
        bookingdate: bookingdate,
        moviename: moviename,
        moviewatchers: name,
        totalceats: ceats,
        ceatnames: allSeatarray.toString(),
        totalcost: ticketcost * ceats,
        theatername: theatername,
        screenname: screenname,
        showtime: showtime
      }).then(response => {
        if (response.data == "Ticket booked successfully") {
          alert("Your Booking Was Successful");
          var currentDate = new Date();
          var day = currentDate.getDate();
          var month = currentDate.getMonth() + 1;
          var fullyear = currentDate.getFullYear();
          var fulldate = day + "-0" + month + "-" + fullyear;
          navigate("/bookingdetails", {
            state: {
              currentdate: fulldate,
              moviename: moviename,
              moviewatchers: name,
              ceatnames: allSeatarray.toString(),
              totalcost: ticketcost * ceats,
              theatername: theatername,
              screenname: screenname,
              showtime: showtime
            }
          });
        } else {
          alert(response);
        }
      });
    }
  };

  return (
    <div>
      <Usernavbar />
      <form
        className="ceat-pick"
        style={{
          background: "#f6f5f7",
          width: "55%",
          height: "770px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <h1 style={{ paddingTop: "20px" }} className="title">
          Pick Ceats
        </h1>
        <br />
        <br />
        <div className="inputForm">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            value={name}
            onChange={e => setname(e.target.value)}
          />
          <br />
          <input
            type="number"
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            className="form-control"
            placeholder="Enter Number Of Ceats"
            value={ceats}
            onChange={e => setceats(e.target.value)}
          />
          <br />
          <input
            type="button"
            value="Pick Cetas"
            className="btn btn-success"
            onClick={startSelect}
          />
        </div>
        <br />
        <div class="seatStructure">
          <center>
            <p id="notification" />
            <table id="seatsBlock" style={{ marginLeft: "15%" }}>
              <tr>
                <td colspan="14">
                  <div
                    class="screen"
                    style={{
                      width: "100%",
                      height: "20px",
                      background: "#ff4b2b",
                      color: "#fff",
                      lineHeight: "20px",
                      fontSize: "15px"
                    }}
                  >
                    SCREEN
                  </div>
                </td>
                <td rowspan="20">
                  <div
                    class="smallBox greenBox"
                    style={{ width: "max-content" }}
                  >
                    Selected Seat
                  </div>{" "}
                  <br />
                  <div class="smallBox redBox" style={{ width: "max-content" }}>
                    Reserved Seat
                  </div>
                  <br />
                  <div
                    class="smallBox emptyBox"
                    style={{ width: "max-content" }}
                  >
                    Empty Seat
                  </div>
                  <br />
                </td>

                <br />
              </tr>
              <tr>
                <td />
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td />
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              <tr>
                <td>A</td>
                <td>
                  <input type="checkbox" class="seats" value="A1" id="A1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A2" id="A2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A3" id="A3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A4" id="A4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A5" id="A5" />
                </td>
                <td class="seatGap" />
                <td>
                  <input type="checkbox" class="seats" value="A6" id="A6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A7" id="A7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A8" id="A8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A9" id="A9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A10" id="A10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A11" id="A11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="A12" id="A12" />
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>
                  <input type="checkbox" class="seats" value="B1" id="B1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B2" id="B2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B3" id="B3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B4" id="B4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B5" id="B5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="B6" id="B6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B7" id="B7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B8" id="B8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B9" id="B9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B10" id="B10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B11" id="B11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="B12" id="B12" />
                </td>
              </tr>
              <tr>
                <td>C</td>
                <td>
                  <input type="checkbox" class="seats" value="C1" id="C1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C2" id="C2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C3" id="C3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C4" id="C4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C5" id="C5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="C6" id="C6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C7" id="C7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C8" id="C8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C9" id="C9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C10" id="C10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C11" id="C11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="C12" id="C12" />
                </td>
              </tr>
              <tr>
                <td>D</td>
                <td>
                  <input type="checkbox" class="seats" value="D1" id="D1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D2" id="D2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D3" id="D3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D4" id="D4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D5" id="D5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="D6" id="D6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D7" id="D7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D8" id="D8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D9" id="D9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D10" id="D10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D11" id="D11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="D12" id="D12" />
                </td>
              </tr>
              <tr>
                <td>E</td>
                <td>
                  <input type="checkbox" class="seats" value="E1" id="E1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E2" id="E2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E3" id="E3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E4" id="E4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E5" id="E5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="E6" id="E6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E7" id="E7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E8" id="E8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E9" id="E9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E10" id="E10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E11" id="E11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="E12" id="E12" />
                </td>
              </tr>
              <tr class="seatVGap" />
              <tr>
                <td>F</td>
                <td>
                  <input type="checkbox" class="seats" value="F1" id="F1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F2" id="F2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F3" id="F3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F4" id="F4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F5" id="F5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="F6" id="F6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F7" id="F7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F8" id="F8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F9" id="F9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F10" id="F10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F11" id="F11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="F12" id="F12" />
                </td>
              </tr>
              <tr>
                <td>G</td>
                <td>
                  <input type="checkbox" class="seats" value="G1" id="G1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G2" id="G2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G3" id="G3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G4" id="G4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G5" id="G5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="G6" id="G6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G7" id="G7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G8" id="G8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G9" id="G9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G10" id="G10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G11" id="G11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="G12" id="G12" />
                </td>
              </tr>

              <tr>
                <td>H</td>
                <td>
                  <input type="checkbox" class="seats" value="H1" id="H1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H2" id="H2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H3" id="H3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H4" id="H4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H5" id="H5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="H6" id="H6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H7" id="H7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H8" id="H8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H9" id="H9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H10" id="H10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H11" id="H11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="H12" id="H12" />
                </td>
              </tr>

              <tr>
                <td>I</td>
                <td>
                  <input type="checkbox" class="seats" value="I1" id="I1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I2" id="I2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I3" id="I3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I4" id="I4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I5" id="I5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="I6" id="I6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I7" id="I7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I8" id="I8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I9" id="I9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I10" id="I10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I11" id="I11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="I12" id="I12" />
                </td>
              </tr>

              <tr>
                <td>J</td>
                <td>
                  <input type="checkbox" class="seats" value="J1" id="J1" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J2" id="J2" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J3" id="J3" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J4" id="J4" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J5" id="J5" />
                </td>
                <td />
                <td>
                  <input type="checkbox" class="seats" value="J6" id="J6" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J7" id="J7" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J8" id="J8" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J9" id="J9" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J10" id="J10" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J11" id="J11" />
                </td>
                <td>
                  <input type="checkbox" class="seats" value="J12" id="J12" />
                </td>
              </tr>
            </table>
            <br />
            <input
              type="button"
              value="Confirm Selection"
              className="btn btn-success"
              style={{ backgroundColor: "green" }}
              id="con-select"
              onClick={confirmSelection}
              onclick="updateTextArea()"
            />
          </center>
        </div>
        <br />
        <br />
        <div class="displayerBoxes">
          <center>
            <table
              class="Displaytable"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <tr>
                <th>Name</th>
                <th>Number of Seats</th>
                <th>Seats</th>
              </tr>
              <tr>
                <td>
                  <textarea id="nameDisplay" />
                </td>
                <td>
                  <textarea id="NumberDisplay" />
                </td>
                <td>
                  <textarea id="seatsDisplay" />
                </td>
              </tr>
            </table>
            <br />
            <button
              type="submit"
              className="btn btn-success"
              id="pay-btn"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              onClick={bookingFunction}
            >
              Book Now
            </button>
          </center>
        </div>
      </form>
    </div>
  );
};
