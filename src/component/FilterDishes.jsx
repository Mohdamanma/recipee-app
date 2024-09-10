import React, { useState } from "react";
import Pagination from "./Pagination";
import DishList from "./DishList";

function FilterDishes(props) {
  

  const [filteredDishes, setFilteredDishes] = useState([0]);
  const [activeDish, setActiveDish] = useState("Beef");
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage,setitemsPerPage] = useState(4)
 
   const indexOfLastDish  = currentPage * itemsPerPage
   // 1 * 4 = 4
   // 2 * 4 = 8
   // 3 * 4 = 16
   
   const indexOfFirstDish = indexOfLastDish - itemsPerPage

   const showTheseDishes = filteredDishes.slice(indexOfFirstDish,indexOfLastDish) 

    // Show only single Dishes
    let maxListItem = 4
  let singleDishItems = props.singleDishData.map((item,index) => {
    if (index < maxListItem) {
        return (
        <DishList item={item}/>
        )
      }
  });


    // Show onClick Filtered Dishes 
  function showFilterDishHandler(categories) {
    setActiveDish(categories);
    props.setSingleDish([])

    const FilteredDishesArray = props.mealCategories
      .filter((item) => {
        return item.strCategory === categories;
      })
      .map((item) => {
        return (
          <li className="list-none  max-w-64  hover:scale-105">
            <img
              className="w-52 rounded-md mt-3 "
              src={item.strMealThumb}
              alt=""
            />
            <h1 className="mt-3 font-medium">{item.strMeal}</h1>
          </li>
        );
      });
    setFilteredDishes(FilteredDishesArray);
  }

    // Category Dishes
  const allCategories = props.catagories.map((item) => {
    return (
      <li
        onClick={() => {
          showFilterDishHandler(item.strCategory);
        }}
        className={` ${
          item.strCategory === activeDish ? "active" : ""
        } text-white cursor-pointer sm:max-w-52   pt-2 font-semibold pb-2 pr-10 bg-yellow-500 rounded-full hover:bg-blue-950  hover:transition-all duration-500`}
      >
        {item.strCategory}
      </li>
    );
  });
  // console.log("item Clicked:", hasSelectedCategory);

  return (
    <div className="mx-11 text-center">
      <div className="sm:mt-16 mb-9 ">
        <h1 className="text-2xl font-semibold mb-3 mt-6 ">
          Choose your Dishes
        </h1>
        <p className="max-w-screen-sm m-auto px-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda id
          blanditiis illum, cum atque ducimus?
        </p>
      </div>
      <ul className="grid sm:grid-cols-4 grid-cols-2  sm:mx-40 gap-2 ">{allCategories}</ul>
      {/* <ul className="mt-12 flex flex-wrap gap-3 "></ul> */}
      <div className=" mt-9 ">
        <ul className="place-items-center grid sm:grid-cols-4 sm:mr-4 ">
          {singleDishItems}
          {filteredDishes.length != 0 ? 
            showTheseDishes
           : 
            <div className="w-full col-span-4 mt-12 p-6 rounded-2xl border-red-700 border-2  ">
              <h1 className="text-red-600 font-semibold text-3xl ">Sorry, no items found</h1>
              <p>Please Try another dishes</p>
            </div>
          }
        </ul>
      </div>
       {/* <Pagination filteredDishes={filteredDishes}  itemsPerPage={itemsPerPage}/> */}
    </div>
  );
}

export default FilterDishes;
