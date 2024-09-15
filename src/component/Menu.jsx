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


  let imgSrc = meal.map((item) => {
    return item.strMealThumb;
  });
  let mealName = meal.map((item) => {
    return item.strMeal;
  });
  const idMeal = meal.map((item) => {
    return item.idMeal;
  });

  return (
    <section className=" ">
      <h1 className=" text-black sm:text-4xl text-xl font-semibold from-neutral-800 sm:pt-7 ml-5 ">
        Trending Dishes
      </h1>
      <div className="sm:w-72 w-36 h-1 ml-14 mt-2 bg-orange-500"></div>

      <div className="sm:px-6 px-5  mt-8 grid sm:grid-cols-3  gap-7 ">
        <Cart meal={imgSrc[0]} name={mealName[0]} mealId={idMeal[0]} />
        <Cart meal={imgSrc[1]} name={mealName[1]} mealId={idMeal[1]} />
        <Cart meal={imgSrc[2]} name={mealName[2]} mealId={idMeal[2]} />
        <Cart meal={imgSrc[3]} name={mealName[3]} mealId={idMeal[3]} />
        <Cart meal={imgSrc[4]} name={mealName[4]} mealId={idMeal[4]} />
        <Cart meal={imgSrc[5]} name={mealName[5]} mealId={idMeal[5]} />
      </div>

      <h1 className=" text-black sm:text-4xl  text-xl font-semibold from-neutral-800 sm:mt-16 mt-10 ml-5 ">
        Most Popular
      </h1>
      <div className="sm:w-72 w-36   h-1 ml-14 mt-2 bg-orange-500"></div>
      <div className="sm:px-6 px-5   mt-8 grid sm:grid-cols-3  gap-7 ">
        <Cart meal={imgSrc[6]} name={mealName[6]} mealId={idMeal[6]} />
        <Cart meal={imgSrc[7]} name={mealName[7]} mealId={idMeal[7]} />
        <Cart meal={imgSrc[8]} name={mealName[8]} mealId={idMeal[8]} />
        <Cart meal={imgSrc[9]} name={mealName[9]} mealId={idMeal[9]} />
        <Cart meal={imgSrc[10]} name={mealName[10]} mealId={idMeal[10]} />
        <Cart meal={imgSrc[11]} name={mealName[11]} mealId={idMeal[11]} />
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
