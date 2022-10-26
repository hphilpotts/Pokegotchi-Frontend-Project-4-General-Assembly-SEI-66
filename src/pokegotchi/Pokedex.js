import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Pokegotchi from './Pokegotchi';
import './pokedex.css'


export default function Pokedex() {

    const [PokegotchiList, setPokegotchiList] = useState([]);
    const [Error, setHasError] = useState([]);

    

    useEffect(() => {
        const PokegotchiList = async () => {
            try {
                for(let i=1; i<=151; i++) {
                const { data }  = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i );
                console.log(data.id)
                // console.log(data.name)
                // console.log(data.sprites.other["official-artwork"].front_default)
                // console.log(data, "string")

                setPokegotchiList(data.id)
                // console.log(setPokegotchiList)
                

            }} catch (err) {
                setHasError({ error: true, message: err.message })
            }
        }
        PokegotchiList()
    }, [])

        
    return (

        <div>
            <h1>Some pokemon will appear here</h1>
            <img src="img/pick1.png" className='logo-image' alt="pokemon-logo"/>
            <div>
                {PokegotchiList.map((pokemon) => {
                    const {id, name, attributes } = pokemon
                    return (
                        <div>
                            <h1>{id}</h1>
                            <h1>{name}</h1>
                            <ul>
                                {attributes.map((attribute) => {
                                    const {id, name, sprites = []} = attribute
                                    const [sprite = null] = sprites
                                    return (
                                        <li key={id}>
                                          <img src={sprite} alt={name}/> 
                                          {name}        
                                        </li>
                                    )})
                                }
                            </ul>
                            
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

