import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import Pokegotchi from './Pokegotchi'; 
import './pokedex.css'


export default function Pokedex() {

const [Pokegotchi, setPokegotchi] = useState([]);
const [Error, setHasError] = useState([]);

// const [isEdit, setIsEdit] = useState(false);
// const [currentPokegotchi, setCurrentPokegotchi] = useState({})

useEffect(() => {
    const fetchPokegotchi = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        console.log(data)
        setPokegotchi(data.results)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    fetchPokegotchi()
  }, [])



  return (
    <div>
        <h1>Pokegotchi-dex</h1>
        <div>
            pokegotchi
        </div>

    </div>
  )
  }
