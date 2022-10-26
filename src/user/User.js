import React, { useEffect, useState} from 'react'

// Axios:
import Axios from 'axios'

// React Router DOM:
import { useNavigate } from 'react-router-dom';


// MUI imports:
import { Box } from '@mui/system'
import { CircularProgress, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// CSS import:
import './user.css'

export default function User(props) {

  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState(null)
  const [userProfile, setUserProfile] = useState({})
  const [openDeleteDialogue, setOpenDeleteDialogue] = useState(false) // for confirm delete dialoge box

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

  // DELETE User:

    // show confirm delete dialogue
  const handleDeleteClick = () => {
    setOpenDeleteDialogue(true)
  }
    // hide confirm delete dialogue on cancel
  const cancelDeleteClick = () => {
    setOpenDeleteDialogue(false)
  }

  const navigate = useNavigate()

    // DELETE Axios function:
  const deleteUser = id => {
    Axios.delete(`user/delete?id=${id}`)
    .then(res => {
      console.log('Deleted user!')
      console.log(res)
      navigate('/signup') // takes user back to signup page
        // ...because they will surely regret their decision
    })
    .catch(err => {
      console.log('Error deleting User!')
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

  // * just for debug
  // console.log(userProfile)

  // format createdAt for readable display
    // TODO - is there a better way? Like a moment-type library? 
  const dateData = new Date(userProfile.createdAt).toString().split(' ').slice(1, 4 ).join(' ')

  return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">
          <Box className='user-box'>
            {/* <span>{props.user.user.id}</span> */}
            <p>Username: {userProfile.userName}</p>
            <p>Email: {userProfile.emailAddress}</p>
            <p>User since: {dateData}</p>
            <p>PokeGotchi: {props.pG.name}</p>
            <Button className="user-button" variant="contained">Edit Profile</Button>
            <Button className="user-button" variant="contained" color="error" onClick={handleDeleteClick}>Delete Profile</Button>
            <Dialog
              open={openDeleteDialogue}
              onClose={cancelDeleteClick}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Do you really want to delete your account?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  If you delete your account, all your user data will be lost! Also, who is going to look after your PokeGotchi once you've gone?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant='contained' color='error' onClick={deleteUser(userId)}>Yes, Delete</Button>
                <Button variant='contained' onClick={cancelDeleteClick}>Cancel Delete</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
  )
}
