import React from "react";
import True from "../Images/mini icons/true2.png";
import False from "../Images/mini icons/false2.png";

export default function PremiumPlan() {
  return (
    <div className="PremiumPlan">
      <h2>Premium</h2>
      <h3>$39.99/year</h3>
      <p>or</p>
      <h3 style={{fontSize: "1.8rem"}}>$4.99/month</h3>
      <div>
        <div className="true">
          <p>
            <img src={True} style={{ display: "inline" }} />
            Link up to 2 credit cards
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            Advanced Analytics And Insights
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            Advanced Analytics And Insights
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            Courses And Educational Content
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            24/7 Customer Support{" "}
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            Priority email customer support
          </p>
        </div>
        <div className="false">
          <p>
            <img src={False} style={{ display: "inline" }} />
            Personalized dashboard{" "}
          </p>
          <p>
            <img src={False} style={{ display: "inline" }} /> Flexible expense
            tracking{" "}
          </p>
          <p>
            <img src={False} style={{ display: "inline" }} /> Dedicated support{" "}
          </p>
          <p>
            <img src={False} style={{ display: "inline" }} /> Tailored solutions{" "}
          </p>
        </div>
        <button className="btn-plan">Choose Plan</button>
      </div>
    </div>
  );
}
