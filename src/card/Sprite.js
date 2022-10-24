import React from 'react'

export default function Sprite(props) {
  return (
    <img src={`https://cdn.traction.one/pokedex/pokemon/${props.imgKey}.png`} ></img>
  )
}
