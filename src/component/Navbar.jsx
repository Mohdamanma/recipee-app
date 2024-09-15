import React, { useContext, useState } from "react";
import logo from "../Asset/logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

import { AllMenuContext } from "../App";
import Cart from "../container/Cart";

function Navbar() {


  const { cart} = useContext(AllMenuContext)
  // const account = document.getElementById('Account')


  console.log("item in Cart :",cart.length)

  const navigate = useNavigate()

  // const userExist = JSON.parse(sessionStorage.getItem('User'))

  // console.log("user Exist", userExist)

  // if (userExist) {
  //   account.innerHTML = "Logout"
  // }else{
  //   account.innerHTML ="Login"
  // }

  function onLogOutHandler() {
    sessionStorage.removeItem('User')
    navigate('/signUp')
  }


  return (
    <>
      <div className="fixed z-10 shadow-2xl border-b-2 rounded-b-2xl border-gray-200 items-center sm:bg-white/10 backdrop-blur-md bg-transparent w-full flex justify-between sm:py-1 sm:px-4 ">
        <div className="flex items-center ml-4">
          <img src={logo} height={50} width={80} alt="" />
          <h1 className="text-black text-xl  sm:text-4xl font-bold ">
            Food Ninja
          </h1>
        </div>
        <div className="relative flex items-center gap-7 mr-8">
          <Link to='/cart'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="sm:size-10 size-8 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div className="absolute sm:left-6 left-4 bottom-2  sm:w-6 sm:h-5 w-6 h-5 font-bold bg-yellow-500 opacity-80  rounded-full flex items-center justify-center text-black">{cart.length}</div>
          </Link>
          <button id="Account" onClick={onLogOutHandler} className="border-2 rounded-2xl sm:font-semibold cursor-pointer hover:bg-yellow-300 sm:p-3 py-1 px-2">
            Login
          </button>

        </div>
      </div>
      <div className="shadow-2xl border-b-2 rounded-b-2xl border-gray-200 items-center sm:bg-white/10 backdrop-blur-md bg-transparent w-full flex justify-between sm:py-1 sm:px-4 ">
        <div className="flex items-center ml-4">
          <img src={logo} height={50} width={80} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
