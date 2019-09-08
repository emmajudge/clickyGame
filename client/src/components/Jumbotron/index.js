import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1> The Clicky Lebowski</h1>
      <h2> Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  );
}

export default Jumbotron;