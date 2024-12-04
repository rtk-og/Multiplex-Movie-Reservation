import Axios from "axios";
import React, { useState } from "react";
import "../css/movie_upload.css";
import Adminnavbar from "../navbar/admin_navbar";

function Addtheater() {
  const [theaterimageurl, settheaterimageurl] = useState("");
  const [theatername, settheatername] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (theaterimageurl === "" || theatername === "" || email === "") {
      alert("please fill all fields");
    } else {
      console.log(theaterimageurl, theatername, email);
      Axios.post("http://localhost:3001/api/addtheater", {
        theaterimageurl: theaterimageurl,
        theatername: theatername,
        theateremail: email
      }).then(response => {
        if (response.data == "Theater Added Successfully") {
          alert("Theater Added Successfully");
        }
        settheaterimageurl("");
        settheatername("");
        setemail("");
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
          <div class="wrap-login100" style={{ height: "500px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Add Theater </span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={theaterimageurl}
                  onChange={e => settheaterimageurl(e.target.value)}
                  placeholder="Theaterimageurl"
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
                  onChange={e => settheatername(e.target.value)}
                  placeholder="Theatername"
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
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  placeholder="Email"
                />
                <span class="focus-input100" />
              </div>

              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Add Theater
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

export default Addtheater;
