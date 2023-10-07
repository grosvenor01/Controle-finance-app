import React from "react";
import "./LandingPage.css";
import MacBook from "../Images/Mobile Screens/MacBook.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="LandingPageContainer">
      <div className="flex flex-between">
        <div className="flex-1"/>
        <div className="flex flex-1 space-x-10 justify-center items-center">
          <Link to='/contct'>Contact</Link>
          <Link >Contact</Link>
          <Link >Contact</Link>
          <Link >Contact</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="btn btn-primary">Join us</button>
        </div>
      </div>
      <div className="InsideContainer">
        <div className="LeftSide">
          <p style={{ marginBottom: 0 }}>With Revo Business</p>
          <h1>Take control over your <span>finances</span></h1>
          <p>
            Managing multiple bank accounts and credit cards just got easier!
            Our platform brings together all your financial data in one place,
            providing you with a comprehensive view of your financial health.
          </p>
          <button>Get started now {">"}</button>
        </div>

        <div className="rightSide">
          <img src={MacBook} />
        </div>
      </div>
    </div>
  );
}
