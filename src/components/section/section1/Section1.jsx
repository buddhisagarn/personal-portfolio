// import React from 'react'
import "../../../../stylesheets/section.css";
import Button1s from "./Button1s";
import Connect1 from "./Connect1";
import Firsts from "./Firsts";
import Seconds from "./Seconds";

export default function Section1() {
  return (
    <div className="firsts">
      <Firsts />
      <Seconds />
      <Button1s />
      <Connect1 />
      <div className="profile-img">
        <img src="profile.jpg" alt="" />
      </div>
      <div className="pen-one">
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}
