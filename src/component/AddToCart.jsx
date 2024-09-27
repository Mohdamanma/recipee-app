import React, { useState } from 'react'
import { AllMenuContext } from '../App'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../CreateClient'

function AddToCart() {
  const { cart, setCart } = useContext(AllMenuContext)
  const [toast,setToast] =useState(false)

  const [total, setTotal] = useState()

  const calculateTotalPrice = () => {
    // Map Total Price
    const totalPrice = cart.map(item => item.totalPrice);

    console.log("Total price : ", totalPrice)

    //  totalPrice values
    const totalSum = totalPrice.reduce((acc, curr) => acc + curr, 0);

    // calculated total
    setTotal(totalSum);
  };

  // cart changes
  useEffect(() => {
    calculateTotalPrice()
    // onCloseIconHandler()
  }, [cart]);


  const currentUser = JSON.parse(localStorage.getItem('User'))
  const toastMessage =document.getElementById('toast-message')

  async function onCloseIconHandler(index, itemName) {

    const updatedCart = cart.filter((item) => item.name !== itemName)

    console.log("Updated cart :", updatedCart)

    let { error } = await supabase
      .from('users')
      .update({ cart: updatedCart })
      .eq('id', currentUser);


    if (error) {
      console.error('Error inserting cart data:', error);
    } else {
      console.log('user cart data:', updatedCart);
      setCart(updatedCart)
      setToast(true)
    }


    setTimeout(() => {
      setToast(false)
    }, 3000);

  }





  const addToCart = cart.map((item, index) => {
    return (
      <div className='flex justify-between my-14'>
        <div className='flex items-center sm:gap-6 gap-3'>
          <div className='sm:h-36 h-24 sm:w-52 w-36'>
            <img className='w-full h-full' src={item.image} alt="" />
          </div>
          <div className=' w-full'>
            <h5 className='sm:font-medium sm:text-xl '>{item.name}</h5>
          </div>
        </div>

        <div className='flex items-center md:gap-7 gap-4'>
          <h5 className='sm:font-medium text-xl sm:mr-4'>{item.price}</h5>
          {/* <h5 className='sm:font-medium text-xl sm:px-8'>{item.price}</h5> */}
          <div className='flex items-center '>
            <h1 className='sm:font-semibold font-medium text-black text-lg sm:mr-3 mr-1'>{item.quantity}</h1>
            <button onClick={() => onRemoveCartHandler(item.name, item.quantity - 1, item.totalPrice)} className='sm:w-7 sm:h-9  w-4 h-5  border-gray-700 border-2'>-</button>
            <button onClick={() => onAddCartHandler(item.name, item.quantity + 1, item.price)} className='sm:w-7 sm:h-9 w-4 h-5 active:bg-gray-500 border-gray-700  border-2'>+</button>
          </div>

          <h5 className='sm:font-medium text-xl sm:px-8'>{item.totalPrice}</h5>
          <div className='hover:bg-red-600 rounded-xl' key={index} onClick={() => onCloseIconHandler(index, item.name)} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 " >
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
      </div>
    )
  })
  console.log("add to cart", cart)


  // Add to Cart and Quantity
  async function onAddCartHandler(itemName, newQuantity, totalPrice) {
    console.log("total Price :", totalPrice)

    const incrementCart = cart.map((item) =>
      item.name === itemName ? { ...item, quantity: newQuantity, totalPrice: totalPrice * newQuantity } : item
    );

    let { error } = await supabase
      .from('users')
      .update({ cart: incrementCart })
      .eq('id', currentUser);


    if (error) {
      return console.error('Error inserting cart data:', error);
    } else {
      console.log('user cart data:', incrementCart);
      setCart(incrementCart)
    }
  }


  // Decreement the Item From the Card

  async function onRemoveCartHandler(itemName, newQuantity, totalPrice) {

    console.log("Item Quantity is : ", newQuantity)


    if (newQuantity >= 0) {

      const decrementCart = cart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity, totalPrice: totalPrice - item.price } : item
      );

      const filterArray = decrementCart.filter((item) => item.quantity !== 0)

      console.log("decreement Cart :", filterArray)
      let { error } = await supabase
        .from('users')
        .update({ cart: filterArray })
        .eq('id', currentUser);

      setCart(filterArray)

    } else {
      console.log("remove Item")
      // const updateCart = cart.filter(item => item.name == itemName)
      // setCart(updateCart)
    }


  }


  return (
    <div className=' sm:m-10 m-4 mb-6 '>
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
            <p className="font-semibold" id='toast-message'>Remove Cart</p>
          </div>
        </div> : null
      }
      <h1 className='text-3xl pb-4 sm:font-semibold '>CART</h1>
      <div className='flex justify-between  sm:mt-4 sm:px-4 border-y-gray-300 border-y-2 sm:py-5 py-2'>
        <h2>CART ITEM</h2>
        <div className='flex '>
          <h3 className='sm:px-5'>Price</h3>
          <h3 className='px-5'>Quatity</h3>
          <h3 className='px-5'>Subtotal</h3>
        </div>
      </div>
      {addToCart}
      <div className=' mt-72 pt-2 w-full flex justify-between px-3 border-t-4 border-black '>
        <h2 className='text-2xl font-bold text-red-700'>Grand Total </h2>
        <h2 className='text-2xl font-bold text-red-700'>{total}</h2>
      </div>
      <Link to='/payment'>
        <div className=' mt-6 flex justify-end '>
          <a href="" className='bg-green-400 flex p-3 font-semibold  px-5 gap-2 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>Checkout</a>
        </div>
      </Link>
    </div>
  )
}

export default AddToCart