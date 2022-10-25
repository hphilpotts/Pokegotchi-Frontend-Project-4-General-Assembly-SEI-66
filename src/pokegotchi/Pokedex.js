import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Pokegotchi from './Pokegotchi';
import './pokedex.css'


export default function Pokedex() {

    const [PokegotchiList, setPokegotchiList] = useState([]);
    const [Error, setHasError] = useState([]);

    // const [isEdit, setIsEdit] = useState(false);
    // const [currentPokegotchi, setCurrentPokegotchi] = useState({})


    useEffect(() => {
        const fetchPokegotchiList = async () => {
            try {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
                console.log(data)
                setPokegotchiList(data.results)
            } catch (err) {
                setHasError({ error: true, message: err.message })
            }
        }
        fetchPokegotchiList()
    }, [])

        
        PokegotchiList.map(item => {
                    return <Pokegotchi key={item.name} {...item} />
                }
            )
              
    return (
        <div>
            {/* IMG needs to be redone  */}
            <img src="img/pick1.png" className='logo-image' alt="pokemon-logo"/>

        </div>
    )
}

