import { ListItem } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Pokedex from './Pokedex'
import './pokedex.css'

export default function Pokegotchi({url}) {

  const [Pokegotchi, setPokegotchi] = useState([]);
  const [Error, setHasError] = useState([]);

  useEffect(() => {
    const fetchPokegotchi = async () => {
        try {
            const { data } = await axios.get({url})
            console.log(data)
            setPokegotchi(data.results)
        } catch (err) {
            setHasError({ error: true, message: err.message })
        }
    }
    fetchPokegotchi()
}, [])

// useEffect(() => {
//   const pokegotchiData = async () => { 
//     try {
//       const { data } = await axios.get({url})
//       console.log(data)
//       setPokegotchi(data.results)
//     } catch (err) {
//       setHasError({ error: true, message: err.message })
//   }
// }
// pokegotchiData()
// }, [])
    



//   console log to make sure response is .forms
//   pass props keyword `${url}`
//   or save key to variable and pass in
//   destructuring
//   let nextPath = {url}
//   need state in axios to save data 
//   set onto state
//   map in return to get names/image of each.



//   return (
//     <div>
//         <h1>Pokegotchi-dex</h1>
//         <div>
//             {PokegotchiList.map(item => {
//                 return <Pokegotchi key={item.name} {...item} />
                // ! NAME AND IMAGE
                // ! Name is in forms > name ..... or take name from the api url on pokedex.js??
                // ! Image is in sprites > other > offical artwork > front default:
                // ! can we just iterate through the below link 151 times?
                // ! https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
//             }
//         )}
            
//         </div>

//     </div>
// )
}
