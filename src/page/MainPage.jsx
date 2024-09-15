import React from "react";
import Hero from "../component/Hero";
import SpecialDishes from "../component/SpecialDishes";
import Menu from "../component/Menu";

function MainPage() {

  return (
    <div>
      <Hero />
      <SpecialDishes />    
      <Menu  />
    </div>
  );
}

export default MainPage;
