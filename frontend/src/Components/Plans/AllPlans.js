import React from "react";
import FinhubLogo from "../Images/FinHub.svg";
import "./Plans.css";
import FreePlan from "./FreePlan";
import PremiumPlan from "./PremiumPlan";
import CompanyPlan from "./CompanyPlan";

export default function AllPlans() {
  return (
    <div className="PlansPage">
      <div style={{marginBottom: "35px"}}>
        <img src={FinhubLogo} />
        <h2>Choose a plan and start your 2-month free trial today.</h2>
      </div>
      <div className="flex justify-between items-botom  ">
        <div>
          <FreePlan />
        </div>
        <div>
          <PremiumPlan />
        </div>
        <div>
          <CompanyPlan />
        </div>
      </div>
    </div>
  );
}
