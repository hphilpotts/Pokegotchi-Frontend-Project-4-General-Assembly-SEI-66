import React from 'react'

// CSS import:
import './Main.css'

// Logo to sit above Header navbar
  // TODO : settle upon a colour scheme once full structure in place
export default function Logo() {
  return (
    <div className='header-div'>
        <img src="img/logo3.png" className='header-image' alt="pokemon-logo"/>
    </div>
  )
}