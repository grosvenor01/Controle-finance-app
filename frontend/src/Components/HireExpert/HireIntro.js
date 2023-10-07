import React from "react";
import HireExperts from "../Images/FinancialExperts.svg";
import "./HireExpert.css"

export default function HireIntro() {
  return (
    <div className="IntroContainer">
      <div className="hire-left">
        <h2>Hire financial experts from <br/> all around the world </h2>
        <p>
          Need the best international finance expertise? We can help. Our
          platform connects you with experienced finance experts from around the
          world, who can help your business grow
        </p>
      </div>
      <div className="hire-right">
        <img src={HireExperts}/>
      </div>
    </div>
  );
}
