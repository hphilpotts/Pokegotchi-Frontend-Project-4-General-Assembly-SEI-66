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
import Home from './main/Home'
import Card from './card/Card'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Pokedex from './pokegotchi/Pokedex'
import NotFound from './NotFound'


import User from './user/User'
// import Pokegotchi from './pokegotchi/Pokegotchi'

export default function App() {

  // state variables for auth:
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  const [message, setMessage] = useState(null)
  const [pG, setPG] = useState(null)
  const [loginSignal, setLoginSignal] = useState("")

  useEffect(() => {
  try{
    console.log('Seeing if there is a user...')
    let token = localStorage.getItem("token")

    if(token != null){
      let user = jwt_decode(token);

      if(user){
        console.log('there is a user')
          setIsAuth(true)
          setUser(user)
          findPG(user.user.id)
          sessionStorage.setItem('userId', JSON.stringify(user.user.id)) // store user's userId in sessionStorage
      } else if(!user) { // this means there is a problem with token
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
    if (user) {
      sessionStorage.setItem('userId', JSON.stringify(user.user.id)) // store user's userId in sessionStorage
    }
  } catch (err) {
    console.log(err.message)
  }
  }, [])

  const setSessionStorage = input => {
    sessionStorage.setItem('userId', JSON.stringify(input)) // store user's userId in sessionStorage
  }

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
        findPG(user.user.id) // ensures that pG is found when loginHandler runs, else there is a delay leading to bugs!
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
    console.log('Clearing session storage...')
    sessionStorage.clear()
    console.log('Clearing Local Storage...')
    localStorage.clear()
    setMessage("User logged out successfully")
  }

  // * find pokegotchi by user id
  const findPG = async id => { // user id is passed in as arg here
    console.log('Finding your PokeGotchi from the backend...')
    console.log('User id passed: ' + id)
    await Axios.get(`/pokegotchi/findbyuser?id=${id}`) // TODO protect with auth
    .then(res => {
      console.log(id)
      console.log('...found your PokeGotchi!')
      // console.log(res.data.pokegotchi)
      // console.log('PokeGotchi ObjectId: ' + res.data.pokegotchi[0]._id)
      // console.log('PokeGotchi Name: ' + res.data.pokegotchi[0].name)
      // console.log('PokeGotchi user:' + res.data.pokegotchi[0].user[0])
      setPG(res.data.pokegotchi[0]) // set pG state to user's PokeGotchi
      sessionStorage.setItem('pG', JSON.stringify(res.data.pokegotchi[0])) // store user's PokeGotchi in sessionStorage
    })
    .catch(err => {
      console.log("Error getting PokeGotchi:")
      console.log(err)
    })
  }

  // * debug - slightly tweaked to minimise console clutter:
  // if (user.iat) {console.log("App 'user' state id: " + user.user.id)}
  if (message) {console.log("Message from App.js: " + message)}


  return (
    <div className="app-div">
      <Router>
        <Box className="app-outer">

          <Logo></Logo>
          {/* {user ? "welcome " + user.user.username : "Hi new person. Please sign in/up"} */}
          <Header isAuth={isAuth} onLogoutHandler={onLogoutHandler} setSessionStorage={setSessionStorage} user={user}></Header>
          
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth} user={user} pG={pG} findPG={findPG}/>}></Route>
            <Route path="/card" element={<Card isAuth={isAuth} user={user} pG={pG} findPG={findPG}/>}></Route>
            <Route path="/signin" element={isAuth ? <Card isAuth={isAuth} user={user} pG={pG}/>: <Signin login={loginHandler} passChildSignal={setLoginSignal}></Signin>}></Route>
            <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
            <Route path='/profile' element={<User isAuth={isAuth} user={user} pG={pG}/>}></Route>
            <Route path='*' element={<NotFound/>}/>
            {/* <Route path="/pokegotchi" element={<Pokegotchi/>}></Route> */}

            {/* <Route path="/pokegotchi" element={<Pokegotchi/>}></Route> */}
          </Routes>
        </Box>
      </Router>
    </div>
  )
}
