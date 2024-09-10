import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const [singleMeal, setSingleMeal] = useState([]);
  const { mealId } = useParams();

  const fetchFoodDetails = async () => {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("fetch data :", data)
    setSingleMeal(data.meals)
  };
  console.log("Single Meal data :", singleMeal)

  useEffect(() => {
    fetchFoodDetails();
  }, [mealId]);

  const mealImg = singleMeal.map((item) => {
    return item.strMealThumb;
  });
  const mealName = singleMeal.map((item) => {
    return item.strMeal;
  });

  // console.log("meal id :",mealId);
  return (
    <div className="bg-white sm:px-14 px-4">
      <div className="pt-28"></div>
      <div className="h-96 sm:w-full w-96">
        <img
          src={mealImg}
          className="w-full h-full rounded-xl"
        />
      </div>

      <h2 className="text-black text-2xl font-semibold mt-5">
        {mealName}
      </h2>
      <p className="text-black text-xl font-medium py-2">$500</p>
      <div className="flex pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6  "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6  "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
      <div className="flex">
        <p className="text-black">Domanic Pizza Centre</p>
        <div className="text-black w-0.5 h-7 mx-6"></div>
        <p className="text-black">5th Avenue Time Squre, New york</p>
      </div>
      {/* <ul>{mealIncredients}</ul> */}
      <p className="text-gray-500 py-4 pb-60 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veniam consequatur quibusdam similique ipsa sequi odio, dolor ipsam, ad velit dignissimos exercitationem repellendus et. Consequuntur fuga quibusdam ratione assumenda. Odit sint sequi ullam nihil ratione, nisi adipisci corporis quidem dolore temporibus, illo perferendis. Reprehenderit id beatae ab commodi eius nam, tempore necessitatibus mollitia aliquid deleniti sunt, ipsum odit et temporibus officia, pariatur ex nulla ipsam nobis cumque fugit quo. Nam cumque blanditiis labore repellendus facilis natus sapiente iste sequi odio maxime fugiat, itaque omnis nesciunt corrupti nobis. Dolorum, voluptas repellendus ipsum in tempore quis! Quasi debitis quis asperiores reiciendis a!
      </p>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12418.669329116085!2d76.32182993491841!3d10.045651518728638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725963092563!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
}

export default FoodDetails;
