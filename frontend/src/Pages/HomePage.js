import React from "react";
import LandingPage from "../Components/LandingPage/LandingPage";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
export default function HomePage() {
  return (
      <div>
        <LandingPage />
        <Services />
        <Footer />
      </div>
  );
}
