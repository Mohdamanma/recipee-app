import { Link } from "react-router-dom";

function Cart(props) {
  //  console.log("props of 6 items ",props);

  // let trendingDishesImg = props.meal.map((item)=>{
  //    return (
  //       item.strMealThumb
  //    )
  // })
  // console.log("Props MealId :", props.mealId);

  return (
    <Link to={`/food/${props.mealId}`}>
      <div className="bg-white shadow-2xl rounded-xl transform hover:scale-105 transition duration-500  ">
        <div className="relative  text-center w-full ">
          <img
            className="rounded-t-xl w-full object-cover  h-52 sm:h-48   cursor-pointer "
            src={props.meal}
            alt=""
          />
          <div className="py-4 ">
            <h2 className="text-sm  font-bold from-neutral-500  ">
              {props.name}
            </h2>
            <p className="pt-2">Recipe by Mario</p>
          </div>
          <div className="absolute top-3 left-4 bg-neutral-300  w-16 rounded-xl">
            <span className="from-neutral-500 text-sm  text-black ">25min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cart;
