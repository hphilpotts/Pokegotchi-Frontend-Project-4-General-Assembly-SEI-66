import React from 'react'

// CSS import:
import './main.css'

// Logo to sit above Header navbar
  // TODO : settle upon a colour scheme once full structure in place
export default function Logo() {
  return (
    <div className='logo-div'>
        <img src="img/logo3.png" className='logo-image' alt="pokemon-logo"/>
    </div>
  )
}