import React, { useState, useEffect } from 'react'

// MUI imports:
import { Box } from '@mui/system'
import { Typography, Paper } from '@mui/material'

// React Router DOM import:
import { Link } from 'react-router-dom'

// CSS import:
import './Main.css'


export default function Home(props) {
    const [user, setUser] = useState({})
    const [pG, setPG] = useState({})

    useEffect(() => {
        setPG(props.pG)
        if (!props.pG) {
          const pG = JSON.parse(sessionStorage.getItem('pG')) // get pG item from session storage
          if (pG) {
            setPG(pG) // then set state based on this item retrieved
          }
        } 
      }, [])
    

  return (
    <Box className="card-box card-outer" sx={{flexGrow: 1}}>
      <Box className="card-box card-inner">
        <Typography variant="h3">
            <p className='home-text bold-text'>Welcome to the PokeGotchi App!</p>
        </Typography>
        {!props.isAuth ?
            <Paper>
             <Box className='home-box'>   
                <p>{props.isAuth}</p>
                <Box>
                    <Typography variant="h5">
                        <Link to='/signin' className="link blue-text">This will ultimately become another Sign In form, for now it is a direct link to the /signin route...</Link>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5">
                        <Link to='/signup' className="link blue-text">Not created an account yet? Click here to sign up!</Link>
                    </Typography>
                </Box> 
            </Box>
            </Paper>
            :
            <Box className='home-box'>
                <Box>
                    { pG ?
                        <> 
                        <Typography variant="h5">
                            <Link to='/card' className="link blue-text bold-text">Click here to see how your {pG.name} is getting on!</Link>
                        </Typography>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pG.pokedex}.png`}></img>
                        </>
                        :
                        <Typography variant="h5">
                            {/* TODO : set this to select pokegotchi */}
                            <Link to='/'className="link blue-text">You've not chosen a PokeGotchi yet! Click here to choose one!</Link>
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography variant="h5">
                        <Link to='/profile' className="link blue-text bold-text">Click here to go to your profile page</Link>
                    </Typography>
                </Box>
            </Box>
        }
      </Box>
    </Box>
)
}
