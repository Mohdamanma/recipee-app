import React from "react";

function Hero() {
  return (
    <div
      className="flex  justify-center items-center h-96 inset-0 bg-gradient-to-b  from-slate-400 to-black"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      {/* <img className=' opacity-80  ' src="https://media.istockphoto.com/id/1348886516/photo/variety-of-healthy-smoothie-bowls.jpg?s=2048x2048&w=is&k=20&c=snFXf4MkgNkhlqgLe4xbdFNlS9zBXBZl0CvDsWoNtfE=" alt="" /> */}
      <div className="   text-center  top-36 ">
        <h1 className="text-4xl sm:text-6xl text-white sm:font-semibold font-medium mb-6 ">
          Delecious food zone
        </h1>
        <a className="text-sm font-semibold bg-orange-600 py-2 px-3 rounded-xl hover:bg-yellow-200 hover:text-black text-white ">
          Book your Table
        </a>
      </div>
    </div>
  );
}

export default Hero;
