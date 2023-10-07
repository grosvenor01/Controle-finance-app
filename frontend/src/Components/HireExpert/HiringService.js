import React from "react";
import ServiceItem from "../Services/ServiceItem";
import analytics from "../Images/ServicesIcons/analytics.svg";
import "./HireExpert.css";

export default function HiringService() {
  return (
    <div className="HiringServices">
      <h2>
        what finance experts can <br />
        provide ?{" "}
      </h2>
      <div className="flex">
        {data1.map((service) => {
          console.log("service")
          console.log(service.title)
        return  <ServiceItem
            key={service.id}
            img={service.img}
            title={service.title}
            desc={service.desc}
          />;
        })}
      </div>
    </div>
  );
}
const data1 = [
  {
    id: 1,
    img: analytics,
    title: "High quality finance strategies  ",
    desc: "All of your cards and account in one place",
  },
  {
    id: 2,
    img: analytics,
    title: "Creative advice",
    desc: "Strategically Set and Monitor Your Financial Goals with Automated Savings and Goals System.",
  },
  {
    id: 3,
    img: analytics,
    title: "Give access to business world",
    desc: "Effortlessly Monitor Your Finances with Advanced Analytics Tools.",
  },
];
