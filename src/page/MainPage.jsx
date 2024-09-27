import React, { useContext, useEffect } from "react";
import Hero from "../component/Hero";
import SpecialDishes from "../component/SpecialDishes";
import Menu from "../component/Menu";
import { supabase } from "../CreateClient";
import { AllMenuContext } from "../App";

function MainPage() {
  
  return (
    <div>
      <Hero />
      <SpecialDishes />
      <Menu />
    </div>
  );
}

export default MainPage;
