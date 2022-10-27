import React from 'react'

// CSS import:
import './Main.css'

// Logo to sit above Header navbar
  // TODO : settle upon a colour scheme once full structure in place
export default function Logo() {
  return (
    <div className='logo-div'>
        <img src="img/PokeGotchi1.png" className='logo-image' alt="pokemon-logo"/>
    </div>
  )
}