import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
// import Pokegotchi from './Pokegotchi';
import './pokedex.css'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'


export default function Pokedex() {

    const [isLoading, setIsLoading] = useState(true)
    const [PokegotchiList, setPokegotchiList] = useState([]);
    const [Error, setHasError] = useState([]);



    useEffect(() => {
        const PokegotchiList = async () => {
            try {
                const fetchedData = []
                for (let i = 1; i <= 151; i++) {
                    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
                    console.log(data.id)
                    console.log(data.name)
                    console.log(data.sprites.other["official-artwork"].front_default)
                    // console.log(data, "string")
                    const newPokeGotchi = {
                        'name': data.name,
                        'pokedex': data.id,
                        'image': data.sprites.other["official-artwork"].front_default
                    }
                    
                    // setPokegotchiList(data.id)
                    // console.log(setPokegotchiList)
                    fetchedData.push(newPokeGotchi)

                }
                setPokegotchiList(fetchedData)
            } catch (err) {
                setHasError({ error: true, message: err.message })
            }
        }
        PokegotchiList()
    }, [])

    const displayFetchedData = PokegotchiList.map((item, index) => (
        <Box className="container">
        <Box className="pdex-card-box pdex-card-outer">
        <Box className="pdex-card-box pdex-card-inner">
            <div key={index}>
                <img className="pdexImg" src={item.image} />
                <p className="pdexName">#{item.pokedex} {item.name}</p>
            </div>
            </Box>
        </Box>
        </Box>
        )
    )

    return (

        <div>
            <img className="tagline" src='img/pick.png'></img> 
         <div className="container">
            {displayFetchedData}
         </div>
        </div>

    )
    }