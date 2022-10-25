import React, { useEffect, useState} from 'react'

// Axios:
import Axios from 'axios'

// MUI imports:
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

// CSS import:
import './user.css'

export default function User(props) {

  const { passedData } = props

  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState(null)
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    setTimeout(function () {
      console.log("...waited for 1.5s...")
      setIsLoading(false)
    }, 1500)
    const userId = JSON.parse(sessionStorage.getItem('userId')) // get userId item from session storage
    console.log(userId)
    loadUserDetail(userId)
  }, [])



  // GET User detail from Database using App.js user state as id parameter:
  const loadUserDetail = id => {
    console.log('Passed in: ' + id)
    Axios.get(`user/detail?id=${id}`)
    .then(res => {
      let user = res.data.user
      console.log('Loaded User info:')
      setUserProfile(user)
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

  console.log(userProfile)

  const dataData = new Date(userProfile.createdAt).toString().split(' ').slice(1, 4 ).join(' ')

  return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">
          <Box className='user-box'>
            {/* <span>{props.user.user.id}</span> */}
            <p>Username:</p>
            <p>{userProfile.userName}</p>
            <p>Email:</p>
            <p>{userProfile.emailAddress}</p>
            <p>User since:</p>
            <p>{dataData}</p>
          </Box>
        </Box>
      </Box>
  )
}
