import React from "react";
import Facilities from "./Facilities";
import Breadcrumb from "../utils/Breadcrumb";
import Amenities from "./Amenities";
import Features from "./Features";
import Rooms from "../Home/Rooms";
const Services = () => {
  document.title = "Services | Hotux"
  return (
    <div>
      <Breadcrumb page="Services" />
      <Amenities/>
      <Features/>
      <Facilities />
      <Rooms/>
    </div>
  );
};

export default Services;
