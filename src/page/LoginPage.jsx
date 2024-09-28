import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllMenuContext } from '../App'
import { supabase } from '../CreateClient'
import { useEffect } from 'react'
import { Link } from "react-router-dom";




function LoginPage() {

  const { cart } = useContext(AllMenuContext)

  const [users, setUsers] = useState([])

  // const [user, setUser] = useState({
  //   name: '',
  //   password: ''
  // })

  const navigate = useNavigate()


  useEffect(() => {
    fetchUserData()
  }, [])

  // SupaBase Backend

  async function fetchUserData() {
    const { data } = await supabase
      .from('users')
      .select()
    setUsers(data)
  }
  console.log("Users data are :", users)




  // function handleChange(e) {

  // }



  function onLoginHandler() {
    const Username = document.getElementById('Username').value
    const password = document.getElementById('password').value
    const error = document.getElementById('error-message')
    error.style.color = 'red'


    if (Username == '' && password == '') {
      error.innerHTML = "Please enter the Field"
    } else {
     
      const user = users.find((user) => {
        return user.name === Username && user.password === password
      })
      console.log("Loggin sucessfully:", user)




      if (user) {
        localStorage.setItem('User', JSON.stringify(user.id))
        console.log("login successfully")
        navigate('/')
        
      } else {
        error.innerHTML = "username or password inncorrect"
        console.log("Create new Account")
      }

    }
  }
  return (
    <div className="flex justify-center custom-bg bg-cover bg-center bg-black bg-opacity-55   py-40  bg-blend-darken " >
      
          <div className=' bg-black bg-opacity-70  border-black border-2 rounded-2xl py-14 px-14 '>
            <h2 className='text-center text-white font-extrabold text-lg '>Login</h2>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Username</label>
              <input id='Username' className='outline-none border-none rounded-md py-1 px-3' type="text" name='name' />
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor="" className='text-white'>Password</label>
              <input id='password' type="password" className='outline-none border-none rounded-md py-1 px-3' name='password' />
            </div>
            <div id='error-message' className='mt-2'></div>
            <div className='text-end text-white font-light text-sm mt-1 cursor-pointer'>
              <p>Forget password</p>
            </div>
            <button onClick={onLoginHandler} className='text-white bg-orange-600 h-7 w-full rounded-md font-medium mt-7 '>Login In</button>
            <Link to='/signUp'> <p className='text-orange-500 text-end mt-2 font-light '> Create an Account</p></Link>
          </div>
        </div>
    
  )
}

export default LoginPage