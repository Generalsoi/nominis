import React from "react";
import "../Nominis/Nominis.css";
import Icon4 from "../Assets/Images/Icono4.png";
import Icon1 from "../Assets/Images/Icono1.png";
import Icon2 from "../Assets/Images/Icono2.png";
import Avatar from "../Assets/Images/avatar.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <div>
          <h3>Story Title</h3>
          <p>Episode 1</p>
        </div>
        <div>
          <div>
            <img src={Icon1} alt="Icon1" />
            <img src={Icon2} alt="Icon2" />
            <img src={Icon2} alt="Icon3" />
            <img src={Icon2} alt="Icon4" />
            <img src={Icon2} alt="Icon5" />
          </div>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="sound-div">
        <img src={Icon4} alt="sound" />
      </div>
    </div>
  );
};

export default Header;
