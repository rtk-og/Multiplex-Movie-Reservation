import Axios from "axios";
import React, { useState } from "react";
import "../css/movie_upload.css";
import Adminnavbar from "../navbar/admin_navbar";

function Addscreen() {
  const [screenname, setscreenname] = useState("");
  const [theateremail, settheateremail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (screenname === "" || theateremail === "") {
      alert("please fill all fields");
    } else {
      Axios.post("http://localhost:3001/api/addscreen", {
        screenname: screenname,
        theateremail: theateremail
      }).then(response => {
        if (response.data == "Screen Added Successfully") {
          alert("Screen Added Successfully");
        }

        setscreenname("");
        settheateremail("");
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
          <div class="wrap-login100" style={{ height: "450px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Add Screen </span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={screenname}
                  onChange={e => setscreenname(e.target.value)}
                  placeholder="screenname"
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
                  value={theateremail}
                  onChange={e => settheateremail(e.target.value)}
                  placeholder="theateremail"
                />
                <span class="focus-input100" />
              </div>

              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Add Screen
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

export default Addscreen;
