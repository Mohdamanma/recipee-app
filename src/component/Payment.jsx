import React, { useContext } from 'react'
import cash from '../Asset/payment/payment-method.png'
import visa from '../Asset/payment/visa.png'
import paypal from '../Asset/payment/paypal.png'
import card from '../Asset/payment/card.png'
import atm from '../Asset/payment/atm-card.png'

import { AllMenuContext } from '../App'

function Payment() {

    const { cart } = useContext(AllMenuContext)
    console.log("payment cart :", cart)

    const totalPrice = cart.map((items => items.totalPrice))

    const totalSum = totalPrice.reduce((acc,curr) => acc + curr,0)


    console.log("total price : ",totalSum)

    const orderItems = cart.map((items) => {
        return (
            <div className='border-b-black border-2'>
                <div className='flex justify-between  px-4 items-center py-3'>
                    <p className='font-semibold'>{items.quantity}x</p>
                    <div>
                        <p className='font-semibold'>{items.name}</p>
                        <p>Cheese cake Flavour Strewberry</p>
                    </div>
                    <div className='' >
                        <p className='font-semibold'>{items.totalPrice}</p>
                       
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='sm:grid grid-cols-2 gap-3'>
                <div className=' border-2 border-black max-h-[450px] '>
                    <div className='flex font-bold gap-2  border-2 border-b-gray-400 px-2 py-3   '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h2>Contact</h2>
                    </div>
                    <div className='flex border-2 font-bold gap-2 border-b-gray-400 px-2 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>

                        <h2>Order Method</h2>
                    </div>
                    <div className='flex border-2 font-bold gap-2 px-2 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <h2>payment Method</h2>
                    </div>
                    <div className='border-2 font-medium border-black m-7 p-5'>
                        <div className='flex  justify-between px-4 border-2 border-b-gray-300 p-2'>
                            <div>
                                <input type="checkbox" />
                                <label className='ml-2' htmlFor="">Cash on delivery</label>
                            </div>
                            <div>
                                <img src={cash} alt="" height={30} width={30} />
                            </div>
                        </div>
                        <div className='border-2 border-b-gray-300 p-4'>
                            <input type="checkbox" />
                            <label className='ml-2' htmlFor="">Cart at pick up counter</label>
                        </div>
                        <div className='border-2 border-b-gray-400 p-2 pl-4'>
                            <input type="checkbox" />
                            <label className='ml-2' htmlFor="">Pay online</label>
                            <div className='flex pl-4 gap-3 mt-2'>
                                <img src={visa} alt="" height={30} width={30} />
                                <img src={card} alt="" height={30} width={30} />
                                <img src={paypal} alt="" height={30} width={30} />
                                <img src={atm} alt="" height={30} width={30} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart details */}
                <div className=''>
                    <div>
                        <div className='flex justify-between px-6 py-2 border-2 border-gray-300 text-gray-500 font-semibold'>
                            <div className='flex gap-4'>
                                <h3>Qty</h3>
                                <h3>Item</h3>
                            </div>
                            <div>
                                <h3>Price</h3>
                            </div>
                        </div>
                      {/* Cart Array items  */}
                            {orderItems}
                        <div className='py-4 px-2 text-gray-500'>
                            <p className='underline underline-offset-1'>Add Coupon Code</p>
                            <div className='flex justify-between px-3 py-3 text-gray-500'>
                                <p>SubTotal</p>
                                <p>$343</p>
                            </div>
                            <div className='flex justify-between px-3 py-3 text-gray-500'>
                                <p>Tip</p>
                                <p>$343</p>
                            </div>
                            <div className='flex justify-between px-3 py-3 text-black'>
                                <p className='font-bold text-3xl'>Total</p>
                                <p className='font-bold text-2xl'>{totalSum}</p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>


        </section>
    )
}

export default Payment