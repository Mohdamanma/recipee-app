import React from "react";
import logo from "../Asset/logo-removebg-preview.png";

function Navbar() {
  return (
    <div className="fixed z-10 shadow-2xl border-b-2 rounded-b-2xl border-gray-200 items-center sm:bg-white/10 backdrop-blur-md bg-transparent w-full flex justify-between sm:py-1 sm:px-4 ">
      <div className="flex items-center ml-4">
        <img src={logo} height={50} width={80} alt="" />
        <h1 className="text-black text-xl  sm:text-4xl font-bold ">
          Food Ninja
        </h1>
      </div>
      <div className="flex items-center gap-7 mr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="sm:size-10 size-5 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <a className="border-2 rounded-2xl sm:font-semibold cursor-pointer hover:bg-yellow-300 sm:p-3 py-1 px-2">
          Contact Us
        </a>
       
      </div>
    </div>
  );
}

export default Navbar;
