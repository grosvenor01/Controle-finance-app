import React from "react";
import SaveBalance from "./SaveBalance";
import "./Services.css";
import analytics from "../Images/ServicesIcons/analytics.svg";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <div className="PageContainer">
      <SaveBalance />
      <div className="ServicesContainer">
        {data.map((service) => (
          <ServiceItem
            key={service.id}
            img={analytics}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    img: analytics,
    title: "All In One",
    desc: "All of your cards and account in one place",
  },
  {
    id: 2,
    img: analytics,
    title: "Budgeting & saving goals",
    desc: "Strategically Set and MonitorYour Financial Goals with Automated Savings and Goals System.",
  },
  {
    id: 3,
    img: analytics,
    title: "Advanced Insights",
    desc: "Effortlessly Monitor Your Finances with Advanced Analytics Tools.",
  },
  {
    id: 4,
    img: analytics,
    title: "Experts Support",
    desc: "Access Expert Financial Support at a Fraction of the Cost of Hiring an Individual Professional.",
  },
  {
    id: 5,
    img: analytics,
    title: "Analytics",
    desc: "Complete analytics schema to informe users by thier depenses",
  },
  {
    id: 6,
    img: analytics,
    title: "24 / 7",
    desc: "Share topic from professionel accountantes",
  },
];
