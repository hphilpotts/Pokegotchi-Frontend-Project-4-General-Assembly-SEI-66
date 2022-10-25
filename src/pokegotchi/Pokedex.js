import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pokegotchi from './Pokegotchi'; 
import './pokedex.css'


export default function Pokedex() {

const [Pokegotchi, setPokegotchi] = useState([]);
// const [isEdit, setIsEdit] = useState(false);
// const [currentPokegotchi, setCurrentPokegotchi] = useState({})

useEffect(() => {
    loadPokedex()
}, [])

const loadPokedex = () => {

    axios.get('https://pokeapi.glitch.me/v1/pokemon/1/')
    .then(response => {
        console.log(response.data.name)
        setPokegotchi(response.data)
        // setPokegotchi(response.data.number)
        // setPokegotchi(response.data.name)
        // setPokegotchi(response.data.sprite)
    
    })
    .catch(error => {
        console.log("error retreiving Pokegotchi")
        console.log(error);
    })
}

const PokedexList = (Pokegotchi) => {
    console.log(Pokegotchi)
    const pokegotchis = Pokegotchi.map((item, key) => (
        <td key={key}>
                <li> {item.title} </li>
            </td>
        ))
        return pokegotchis;
    }


// delete pokegotchi function??
// const deletePokegotchi = (id) => {
//     Axios.delete(`pokegotchi/delete?id=${id}`, {
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("token")
//         }
//     })
//     .then(response => {
//         console.log("Pokegotchi Deleted Successfully!!!");
//         console.log(response);
//         loadPokegotchiList();
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// const allPokegotchi = pokegotchi.map((pokegotchi, index) => (
//     <tr key={index}>
//         <Pokegotchi {...pokegotchi} deletePokegotchi={deletePokegotchi} />
//         {loadPokedex(pokegotchi)}
//     </tr>
// ))

  return (
    <div>
        <h1>Pokegotchi-dex</h1>
        {/* <setPokegotchi /> */}
    </div>
  )
}