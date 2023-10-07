import React from "react";
import True from "../Images/mini icons/true.png";
import False from "../Images/mini icons/false.png";

export default function FreePlan() {
  return (
    <div className="FreePlan">
      <h2>Basic</h2>
      <h3>Free</h3>
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
        <div className="false">
          <p>
            <img src={False} style={{ display: "inline" }} />
            Priority email customer support
          </p>
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
