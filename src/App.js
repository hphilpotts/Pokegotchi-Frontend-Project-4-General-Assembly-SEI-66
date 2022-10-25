import React, { useState, useEffect } from 'react'

// Axios:
import Axios from 'axios'

// MUI imports:
import { Box } from '@mui/system'

// React Routing:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// JWT decode:
import jwt_decode from 'jwt-decode'

// Component imports:
import Logo from './main/Logo'
import Header from './main/Header'
import Card from './card/Card'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Pokegotchi from './pokegotchi/Pokegotchi'

export default function App() {

  // ! note for testing: in some cases, any key can be supplied in inspcect -> application -> local storage to test before backend connected

  // TODO : test signup functionality
  //working
  // TODO : test signin functionality
  // Working    
  // TODO : test logout functionality
  //working
    // * note: functionality has been passed as a prop to child component Header
    // * rather than having the header within App.js as per CodeAlongs
    // * if there are issues, this may be the cause: see Header component to correct
    // * worst-case we can remove header component and transplant into App.js directly

  // TODO : implement and test responsive header
    // * after above todos are completed
  // TODO : implement and test welcome message
    // * after above todos are completed

  // state variables for auth:
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  const [message, setMessage] = useState(null)

  useEffect(() => {

    let token = localStorage.getItem("token")

    if(token != null){
      let user = jwt_decode(token);

      if(user){
          setIsAuth(true)
          setUser(user)
      } else if(!user) { // this means there is a problem with token
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }

  }, [])

  const registerHandler = (user) => { // passing the whole user object
    Axios.post("auth/signup", user)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const loginHandler = cred => {
    Axios.post("auth/signin", cred)
    .then(response => {
      console.log(response.data.token)  // if promise is fulfilled, log the token

      // storing the token:
      if(response.data.token != null){ // if there isn't not a token :)
        localStorage.setItem("token", response.data.token) // takes key, value

        // decoding the token:
        let user = jwt_decode(response.data.token)

        // changing auth states:
        setIsAuth(true)
        setUser(user)
        setMessage("User logged in sucessfully")
      }

    })
    .catch(error => {
      console.log(error) // else log the error
    })
  } // pass below as prop

  // const userProfile = (user.user._id) => {
  // Axios.get(`user/profile?id=$%{id}`) 

  // }
  const onLogoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
    setMessage("User logged out successfully")
  }

  // * debug:
  console.log(user)
  console.log(message)

  return (
    <div className="app-div">
      <Router>
        <Box className="app-outer">

          <Logo></Logo>
          {/* {user ? "welcome " + user.user.username : "Hi new person. Please sign in/up"} */}
          <Header isAuth={isAuth} onLogoutHandler={onLogoutHandler}></Header>
          
          <Routes>
            <Route path="/card" element={<Card/>}></Route>
            <Route path="/signin" element={isAuth ? <Card/>: <Signin login={loginHandler}></Signin>}></Route>
            <Route path="/signup" element={<Signup register={registerHandler}/>}></Route>
            <Route path="/pokegotchi" element={<Pokegotchi/>}></Route>
          </Routes>
        </Box>
      </Router>
    </div>
  )
}
