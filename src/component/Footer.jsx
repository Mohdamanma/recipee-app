import React from "react";
import logo from "../Asset/logo-removebg-preview.png";

function Footer() {
  return (
    <div className=" w-full bg-gray-300 bg-">
      <div className="flex justify-center items-center">
        <div className="w-96  h-0.5  bg-gray-700"></div>
        <img className="" src={logo} height={110} width={110} alt="" />
        <div className="w-96  h-0.5  bg-gray-700"></div>
      </div>
     
    </div>
  );
}

export default Footer;
