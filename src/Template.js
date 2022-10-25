import React from 'react'

// MUI imports:
import { Box } from '@mui/system'

// CSS import:
// import './< your custom css file >.css'
// * css file should be within the same folder as this component, else change './' at start!

export default function User() {

  return (
      <Box className="card-box card-outer" sx={{flexGrow: 1}}>
        <Box className="card-box card-inner">

          {/* placeholder:  */}
          <Box className='content-box'>
          </Box>

        </Box>
      </Box>
  )
}
