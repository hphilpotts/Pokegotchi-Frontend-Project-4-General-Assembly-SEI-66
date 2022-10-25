import { ListItem } from '@mui/material'
import React from 'react'
import Pokedex from './Pokedex'
import './pokedex.css'

export default function Pokegotchi({url}) { // 

  // const [Pokegotchi, setPokegotchi] = useState([]);
  // const [Error, setHasError] = useState([]);

  // make axios get request pass it url from line 6 of pokedex

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

//  pokegotchiData


  // console log to make sure response is .forms
  // pass props keyword `${url}`
  // or save key to variable and pass in
  // destructuring
  // let nextPath = {url}
  // need state in axios to save data 
  // set onto state
  // map in return to get names/image of each.



//   return (
//     <div>
//         <h1>Pokegotchi-dex</h1>
//         <div>
//             {PokegotchiList.map(item => {
//                 return <Pokegotchi key={item.name} {...item} />
//                 // ! NAME AND IMAGE
//             }
//         )}
            
//         </div>

//     </div>
// )
}
