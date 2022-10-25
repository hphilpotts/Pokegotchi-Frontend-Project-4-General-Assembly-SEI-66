import React, { useEffect, useState} from 'react'

// Axios:
import Axios from 'axios'

// MUI imports:
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

// CSS import:
import './user.css'

export default function User(props) {

  const [isLoading, setIsLoading] = useState(true)
  // const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    setTimeout(function () {
      console.log("I've set a 1.5 second delay to allow everything to load")
      setIsLoading(false)
    }, 1500)
  }, [])

  // GET User detail from Database using App.js user state as id parameter:
  const loadUserDetail = id => {
    console.log('Passed in: ' + id)
    Axios.get(`user/detail?id=${id}`)
    .then(res => {
      let user = res.data.user
      console.log('Loaded User info:')
      console.log(user)
    })
    .catch(err => {
      console.log('Error retrieving User details from the Database, please try again.')
      console.log(err)
    })
  }
    
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

  loadUserDetail(props.user.user.id)

  return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">
          <Box className='user-box'>
            <span>{props.user.user.id}</span>
          </Box>
        </Box>
      </Box>
  )
}
