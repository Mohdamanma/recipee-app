import React, { useContext, useEffect } from "react";
import Hero from "../component/Hero";
import SpecialDishes from "../component/SpecialDishes";
import Menu from "../component/Menu";
import { supabase } from "../CreateClient";
import { AllMenuContext } from "../App";

function MainPage() {
  const { cart, setCart } = useContext(AllMenuContext)

  const currentUser = JSON.parse(localStorage.getItem('User'))

  const fetchUserData = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq("id", currentUser.id)

    let item = JSON.parse(data[0].cart)
    setCart(item)

    if (error) {
      console.error('Error inserting cart data:', error);
    } else {
      console.log('user cart data:', item);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Hero />
      <SpecialDishes />
      <Menu />
    </div>
  );
}

export default MainPage;
