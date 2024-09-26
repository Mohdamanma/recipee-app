import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllMenuContext } from "../App";
import { supabase } from "../CreateClient";

function FoodDetails() {
  const { cart, setCart } = useContext(AllMenuContext);
  const [toast, setToast] = useState(false);
  // const [toastArray, setToastArray] = useState([]);

  const [singleMeal, setSingleMeal] = useState([]);
  const { mealId } = useParams();

  const fetchFoodDetails = async () => {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("fetch data:", data);
    setSingleMeal(data.meals[0]);
    console.log("Single meal are:", data.meals);
  };




  useEffect(() => {
    fetchFoodDetails();
  }, []);

  function getRandomPrice() {
    return Math.floor(Math.random() * 1001);
  }

  const currentUser = JSON.parse(localStorage.getItem('User'))


  const insertCartIntoSupabase = async () => {
    const { data, error } = await supabase
      .from('users')
      .update({ cart: cart })
      .eq('id', currentUser.id)

    if (error) {
      console.error('Error inserting cart data:', error);
    } else {
      console.log('Cart data inserted:', data);
    }
  };

  
  // Call this function whenever you want to insert cart data (e.g., on checkout)
  useEffect(() => {
    if (cart.length > 0) {
      insertCartIntoSupabase();
    }
  }, [cart]);



  function onCartHandler() {
    let priceItem = getRandomPrice();
    const cartItem = {
      name: singleMeal.strMeal,
      price: priceItem,
      image: singleMeal.strMealThumb,
      quantity: 1,
      totalPrice: priceItem * 1,
    };


    setCart((prevItem) => {
      const existingItemIndex = prevItem.findIndex((item) => item.name === cartItem.name);

      if (existingItemIndex !== -1) {
        const updateCart = [...prevItem];
        const existingItem = updateCart[existingItemIndex];
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        return updateCart;
      } else {
        setToast(true);

        return [...prevItem, cartItem];
      }
    });



    setTimeout(() => {
      setToast(false)
    }, 5000);
  }



  return (
    <div className="relative bg-white sm:px-14 mx-10  ">
      {
        toast ? <div className="absolute right-5 bottom-1" >
          <div className="relative w-80 h-16 bg-yellow-400 flex items-center gap-3 justify-center shadow-2xl Toast">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p className="font-semibold">Added to cart</p>
          </div>
        </div> : null
      }
      <div className="h-96 sm:w-full w-80">
        <img
          src={singleMeal.strMealThumb}
          className="w-full h-full rounded-xl object-fill"
          alt="Meal"
        />
      </div>

      <h2 className="text-black text-2xl font-semibold mt-5">
        {singleMeal.strMeal}
      </h2>
      <p className="text-black text-xl font-medium py-2">$7000</p>
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
        <p className="text-black">5th Avenue Time Squre, New york </p>
      </div>
      {/* <ul>{mealIncredients}</ul> */}
      <p className="text-gray-500 py-4 pb-11">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veniam consequatur quibusdam similique ipsa sequi odio, dolor ipsam, ad velit dignissimos exercitationem repellendus et. Consequuntur fuga quibusdam ratione assumenda. Odit sint sequi ullam nihil ratione, nisi adipisci corporis quidem dolore temporibus, illo perferendis. Reprehenderit id beatae ab commodi eius nam, tempore necessitatibus mollitia aliquid deleniti sunt, ipsum odit et temporibus officia, pariatur ex nulla ipsam nobis cumque fugit quo. Nam cumque blanditiis labore repellendus facilis natus sapiente iste sequi odio maxime fugiat, itaque omnis nesciunt corrupti nobis. Dolorum, voluptas repellendus ipsum in tempore quis! Quasi debitis quis asperiores reiciendis a!
      </p>
      <button onClick={onCartHandler} className="bg-yellow-500 cursor-pointer sm:font-semibold font-medium p-3 rounded-xl inline-block mb-8">Add to Cart</button>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12418.669329116085!2d76.32182993491841!3d10.045651518728638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725963092563!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
}

export default FoodDetails;
