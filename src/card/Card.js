import React, { useState, useEffect } from 'react'

// MUI imports:
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

// CSS imports:
import './card.css'

// Component imports:
import Name from './Name'
import Sprite from './Sprite'
import Buttons from './Buttons'
import Status from './Status'
import Updates from './Updates'
import HP from './HP'

export default function Card(props) {

  const [isLoading, setIsLoading] = useState(true)
  const [pG, setPG] = useState({})
  const [user, setUser] = useState(null)

  // * Here useEffect is used to prevent crashes triggered by page refresh or manual url entry to card/ route:
    // If the user performs these actions, the states in parent 'App.js' a cleared and the pG prop passed to this component is 'null'.
    // ! If this approach causes problems later on, try instead executing same API call from App.js ('findPG') within useEffect here!
  useEffect(() => {
    setTimeout(function () {
      console.log("I've set a 1.5 second delay to allow everything to load")
      setIsLoading(false)
    }, 1500)
    console.log('Checking for pG prop from App.js state. If found, set pG state to pG prop and pass on. Logging props.pG:')
    console.log(props.pG) // Debug: First, check if there are props and log, if not then log undefined.
    setPG(props.pG) // If prop found, set pG state, if not this will remain falsy, triggering line below
    if (!props.pG) {// if undefined, look to session storage
      console.log('...props.pG not found, either null, or undefined. Looking in Session Storage, logging pG item:')
      const pG = JSON.parse(sessionStorage.getItem('pG')) // get pG item from session storage
      if (pG) {
        console.log(pG)
        console.log("'pG' item found! Setting pG state to pG item from Session Storage and passing on.")
        setPG(pG) // then set state based on this item retrieved
      } else{
        console.log('Did not find pG prop or pG item in Session Storage, setting pG to placeholder object:')
        setPG({
          'name': 'Pokegotchi not chosen!',
          'hp': 0,
          'pokedex': 132,
          'age' : 0,
          'cleanLevel': 0,
          'foodLevel': 1,
          'playLevel': 0
        })
      }
    } 
  }, [])

  if(isLoading) {
    return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner load-box">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">
          <Box className="card-box-inner name-box">
            <Name name={pG.name}></Name>
            <HP hp={pG.hp}></HP>
          </Box>
          <Box className="card-box-inner sprite-box">
            <Sprite imgKey={pG.pokedex}></Sprite>
          </Box>
          <Box className="card-box-inner buttons-box">
            <Buttons>
              {/* <img src=''></img> commented out temporarily due to React warning message */}


            </Buttons>
          </Box>
          <Box className="card-box-inner status-box">
            <Status pG={pG}></Status>
          </Box>
          <Box className="card-box-inner updates-box">
            <Updates pG={pG}></Updates>
          </Box>
        </Box>
    </Box>
  )
}
