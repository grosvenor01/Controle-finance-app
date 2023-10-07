import React from "react";
import "./Footer.css";
import LeftCol from "./LeftCol";
import RightForm from "./RightForm";
export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterContent space-x-24">
        <div className="flex-1">
          <LeftCol />
        </div>
        <div className="flex-1">
          <RightForm />
        </div>
      </div>
    </div>
  );
}
