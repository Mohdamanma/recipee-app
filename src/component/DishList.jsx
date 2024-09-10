import React from 'react'

function DishList(props) {
    return (
        <li className=" list-none  max-w-64  hover:scale-105">
            <img className="w-52 rounded-2xl mt-3 " src={props.item.strMealThumb} alt="" />
            <h5 className="mt-3 font-semibold">{props.item.strMeal}</h5>
        </li>
    )
}

export default DishList