import React from "react";
import Hero from "../component/Hero";
import SpecialDishes from "../component/SpecialDishes";
import Menu from "../component/Menu";

function MainPage(props) {

    // props.setLoader(true)
  return (
    <div>
      <Hero />
      <SpecialDishes />    
      <Menu  />
    </div>
  );
}

export default MainPage;
