import React from "react";
import "./Nominis.css";
import Header from "../Header/Header";
import Icon3 from "../Assets/Images/Icono3.png";

const Nominis = () => {
  return (
    <div className="nominis">
      <Header />

      <div className="nominis-content-heading">
        <h3>Let's practice</h3>

        <div className="nominis-content">
          <div>
            <p>
              Put the words in order to make <br /> a correct sentence
            </p>
          </div>

          <div>
            <div>
              <img src={Icon3} alt="Icon3" />
            </div>
            <div className="input-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nominis;
