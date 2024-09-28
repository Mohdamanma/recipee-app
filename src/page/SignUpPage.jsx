import React from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../CreateClient';
import { useState } from 'react';


function SignUpPage() {

  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })

  const navigate = useNavigate()




  function handleChange(event) {
    setUser(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  // console.log("User data are :", user)




  async function onSignUpHandler() {
    const email = document.getElementById('email').value
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value


    //unWanted character
    const forbiddenChars = /['<>]/;

    function containForbiddenChars(input) {
      return forbiddenChars.test(input)
    }

    // console.log("contain chars :",containForbiddenChars)

    const error = document.getElementById('error-message')
    error.style.color = 'red'
    if (userName === '' || email === '') {
      error.innerHTML = 'Please Enter the Field'
    } else if (containForbiddenChars(userName) || containForbiddenChars(email)) {
      error.innerHTML = "Special Character not allowed"
    } else if (password < 8) {
      error.innerHTML = "password more than 8 character"
    } else {

      // Insert to Supabase

      await supabase
        .from('users')
        .insert({ email: user.email, name: user.name, password: user.password, cart:'' })


      const storedUsers = JSON.parse(localStorage.getItem('storedUsers')) ? JSON.parse(localStorage.getItem('storedUsers')) : []
      //  console.log("getItem in Session Storage",user_Records.user_Name) 

      // Check if email already exists
      const isEmailExisting = storedUsers.some(user => user.Email === email);
      if (isEmailExisting) {
        error.innerHTML = 'Email Already Exists';
        return; // Early exit if email is already used
      } else {

        // storedUsers.push(
        //   {
        //     Email: email,
        //     user_Name: userName,
        //     password: password,
        //     cart: []
        //   }
        // )
        // sessionStorage.setItem('storedUsers', JSON.stringify(storedUsers))
        navigate('/login')

      }
    }
  }

  return (
    <div className="custom-bg bg-cover bg-center bg-black bg-opacity-55  sm:p-36 p-14 relative bg-blend-darken " >
      <div className='relative z-0 min-w-40   bg-black bg-opacity-65 sm:flex justify-between items-center border-gray-400 border-2 py-14 px-6 rounded-2xl  gap-3'>
        <div className=''>
          <img className='sm:block hidden rounded-2xl' src="https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=jycj9wjnamIgyI6s1MkvOuoerx-hyXxojlGxj0l8bu4=" alt="" />
        </div>
        {/* <Form onSubmit={onSubmitHandler}> */}
        {/* <div className=''> */}
        <div className='bg-black  bg-opacity-70 border-black border-2 rounded-2xl  px-7 py-14'>
          <h2 className='text-center text-white sm:font-extrabold font-semibold '>Sign Uppoo</h2>
          <div className='flex flex-col mt-4'>
            <label htmlFor="" className='text-white'>Email</label>
            <input id='email' className='outline-none border-none rounded-md py-1' type="email" name='email' onChange={handleChange} />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="" className='text-white'>UserName</label>
            <input id='userName' className='outline-none border-none rounded-md py-1' type="text" name='name' onChange={handleChange} />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="" className='text-white'>Password</label>
            <input id='password' type="password" className='outline-none border-none rounded-md py-1' name='password' onChange={handleChange} />
          </div>
          <div id='error-message' className='mt-2'></div>
          <div className='text-end text-white font-light text-sm mt-1 curson-pointer'>
            <p>Forget password</p>
          </div>

        <div className='flex justify-center'>
        <button onClick={onSignUpHandler} className='text-white min-w-36 bg-orange-600 h-7 rounded-md font-medium mt-7'>Sign In</button>
        </div>
          <p className='text-orange-400 text-sm font-light mt-2'> Already have an Account?
            <Link to='/login'>
              <span className='text-orange-400 pl-2'>Login here</span>
            </Link>
          </p>
        </div>
        {/* </div> */}
        {/* </Form> */}

      </div>
    </div>
  )
}

export default SignUpPage