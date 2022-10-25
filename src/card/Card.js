import React, { useState, useEffect } from 'react'

// MUI imports:
import { Box } from '@mui/system'

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

  const [pG, setPG] = useState({})
  const [user, setUser] = useState(null)

  // * use effect added to prevent issue on refresh where parent states are lost:
  useEffect(() => {
    const pG = JSON.parse(sessionStorage.getItem('pG')) // get pG item from session storage
    console.log(props.pG)
    console.log(pG)
    setPG(pG) // then set state based on this item retrieved
  }, [])

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
