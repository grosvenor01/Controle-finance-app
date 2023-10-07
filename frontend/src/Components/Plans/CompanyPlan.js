import React from "react";
import True from "../Images/mini icons/true.png";

export default function CompanyPlan() {
  return (
    <div className="CompanyPlan">
      <h2>Company Plan</h2>
      <h3>Customized Price</h3>
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
        </div>
        <div className="true">
          <p>
            <img src={True} style={{ display: "inline" }} />
            Priority email customer support
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} />
            Personalized dashboard{" "}
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} /> Flexible expense
            tracking{" "}
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} /> Dedicated support{" "}
          </p>
          <p>
            <img src={True} style={{ display: "inline" }} /> Tailored solutions{" "}
          </p>
        </div>
        <button className="btn-plan">Contact Sales Team</button>
      </div>
    </div>
  );
}
