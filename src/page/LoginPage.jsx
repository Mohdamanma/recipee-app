import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AllMenuContext }from '../App'
function LoginPage() {

  const {cart} = useContext(AllMenuContext)

  console.log("add to cart item :",cart)
  
  const navigate = useNavigate()

  function onLoginHandler() {
    const Username = document.getElementById('Username').value
    const password = document.getElementById('password').value
    const error = document.getElementById('error-message')
    error.style.color = 'red'


    // console.log("getITem user are:", storedUser)

    if (Username == '' && password == '') {
      error.innerHTML = "Please enter the Field"
    } else {
      const all_user = JSON.parse(sessionStorage.getItem('storedUsers'))

      // const user_records = all_user ? all_user : []

      const currentUser = all_user.find((user) => {
        return user.user_Name === Username && user.password === password
      })

      console.log("user :",currentUser)
      if (currentUser) {
        sessionStorage.setItem('User',JSON.stringify(currentUser))
        console.log("login successfully")
        navigate('/')
      }else{
        error.innerHTML = "username or password inncorrect"
        console.log("Create new Account")
      }

    }
  }
  return (
    <div className="custom-bg bg-cover bg-center bg-black bg-opacity-55  p-36  relative bg-blend-darken " >

      <div className='relative z-0 bg-black bg-opacity-65 flex justify-between items-center border-gray-400 border-2 py-14 px-6 rounded-2xl  gap-3'>
        <div>
          <img className='rounded-2xl' src="https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=jycj9wjnamIgyI6s1MkvOuoerx-hyXxojlGxj0l8bu4=" alt="" />
        </div>
        <div className='pr-14'>
          <div className='bg-black bg-opacity-70 border-black border-2 rounded-2xl px-16 py-14'>
            <h2 className='text-center text-white font-extrabold text-lg '>Login</h2>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Username</label>
              <input id='Username' className='outline-none border-none rounded-md py-1' type="text" />
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Password</label>
              <input id='password' type="password" className='outline-none border-none rounded-md py-1' />
            </div>
            <div id='error-message' className='mt-2'></div>
            <div className='text-end text-white font-light text-sm mt-1'>
              <p>Forget password</p>
            </div>
            <button onClick={onLoginHandler} className='text-white bg-orange-600 h-7 w-full rounded-md font-medium mt-7 '>Sign In</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage