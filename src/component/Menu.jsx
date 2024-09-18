import React, { useContext, useEffect, useState } from "react";
import Cart from "../container/Cart";
import FilterDishes from "./FilterDishes";

import { AllMenuContext } from '../App'

function Menu() {

  const [Catagories, setCatagories] = useState([]);
  const [singleDish, setSingleDish] = useState([]);  
  const { meal, setMeal } = useContext(AllMenuContext)




  // Get all Menus
  const getAllMealData = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      setMeal(data.meals);
      console.log("fetch data :", data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // Get all Categories
  const allCategories = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const response = await fetch(API_URL);
    const data = await response.json();
    setCatagories(data.categories);
    // props.setLoader(false)
  };

  // Get Only Single Dish
  const getOnlyOneDish = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  };


  useEffect(() => {
    getAllMealData();
    allCategories();
    getOnlyOneDish();
  }, []);


  const trendingDish = meal.map((item, index) => {
    // console.log("meals items are :",index)
    if (index < 6) {
      return (
        <Cart meal={item.strMealThumb} name={item.strMeal} mealId={item.idMeal} />
      )
    }
  })

  const popularDishes = meal.map((item, index) => {
    // console.log("items are : ", index)
    if (index >= 43) {
      return (
        <Cart meal={item.strMealThumb} name={item.strMeal} mealId={item.idMeal} />
      )
    }

  })


  return (
    <section className=" ">
      <h1 className=" text-black sm:text-4xl text-xl font-semibold from-neutral-800 sm:pt-7 ml-5 ">
        Trending Dishes
      </h1>
      <div className="sm:w-72 w-36 h-1 ml-14 mt-2 bg-orange-500"></div>
      <div className="sm:px-6 px-5  mt-8 grid sm:grid-cols-3  gap-7 ">
        {trendingDish}

      </div>

      <h1 className=" text-black sm:text-4xl  text-xl font-semibold from-neutral-800 sm:mt-16 mt-10 ml-5 ">
        Most Popular
      </h1>
      <div className="sm:w-72 w-36   h-1 ml-14 mt-2 bg-orange-500"></div>
      <div className="sm:px-6 px-5   mt-8 grid sm:grid-cols-3  gap-7 ">
        {popularDishes}
      </div>


      <FilterDishes
        catagories={Catagories}
        // mealCategories={meal}
        singleDishData={singleDish}
        setSingleDish={setSingleDish}
      />





    </section >
  );
}

export default Menu;
