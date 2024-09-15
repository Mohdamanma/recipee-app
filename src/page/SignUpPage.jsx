import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import LoginPage from './LoginPage'


function SignUpPage() {

  const navigate = useNavigate()
  function onSignUpHandler() {
    const email = document.getElementById('email').value
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value


    //unWanted character

    const forbiddenChars = /['<>]/; 

    function containForbiddenChars(input){
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
      const storedUsers = JSON.parse(sessionStorage.getItem('storedUsers')) ? JSON.parse(sessionStorage.getItem('storedUsers')) : []
      //  console.log("getItem in Session Storage",user_Records.user_Name) 

      // Check if email already exists
      const isEmailExisting = storedUsers.some(user => user.Email === email);
      if (isEmailExisting) {
        error.innerHTML = 'Email Already Exists';
        return; // Early exit if email is already used
      }else{

        storedUsers.push(
          {
            Email: email,
            user_Name: userName,
            password: password,
            cart : []
          }
        )
        sessionStorage.setItem('storedUsers', JSON.stringify(storedUsers))
        navigate('/login')

      }  
    }


  }

  return (
    <div className="custom-bg bg-cover bg-center bg-black bg-opacity-55  p-36  relative bg-blend-darken " >

      <div className='relative z-0 bg-black bg-opacity-65 flex justify-between items-center border-gray-400 border-2 py-14 px-6 rounded-2xl  gap-3'>
        <div>
          <img className='rounded-2xl' src="https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=jycj9wjnamIgyI6s1MkvOuoerx-hyXxojlGxj0l8bu4=" alt="" />
        </div>
        {/* <Form onSubmit={onSubmitHandler}> */}
        <div className='pr-14'>
          <div className='bg-black bg-opacity-70 border-black border-2 rounded-2xl px-16 py-14'>
            <h2 className='text-center text-white font-extrabold text-lg '>Sign Up</h2>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Email</label>
              <input id='email' className='outline-none border-none rounded-md py-1' type="email" />
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>UserName</label>
              <input id='userName' className='outline-none border-none rounded-md py-1' type="text" />
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Password</label>
              <input id='password' type="password" className='outline-none border-none rounded-md py-1' />
            </div>
            <div id='error-message' className='mt-2'></div>
            <div className='text-end text-white font-light text-sm mt-1 curson-pointer'>
              <p>Forget password</p>
            </div>
            <button onClick={onSignUpHandler} className='text-white bg-orange-600 h-7 w-full rounded-md font-medium mt-7 '>Sign In</button>
          </div>
        </div>
        {/* </Form> */}

      </div>
    </div>
  )
}

export default SignUpPage