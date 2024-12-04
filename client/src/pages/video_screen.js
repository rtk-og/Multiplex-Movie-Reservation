import React from "react";
import { useLocation } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

export const Videoscreen = () => {
  const location = useLocation();
  var url = location.state.url;

  return (
    <div>
      <Usernavbar />
      <h1>Hi weee</h1>
    </div>
  );
};
