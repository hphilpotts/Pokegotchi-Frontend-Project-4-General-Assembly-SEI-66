// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Pokegotchi from './Pokegotchi';
// import './pokedex.css'


// export default function Pokedex() {

//     const [PokegotchiList, setPokegotchiList] = useState([]);
//     const [Error, setHasError] = useState([]);

//     useEffect(() => {
//         const PokegotchiList = async () => {
//                     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//                     .then(response => {
//                         console.log(response);
//                         allpokemon.results.forEach(function(pokemon){
//                         fetchPokemonData(pokemon); 
//                     })
//                     .catch(error => {
//                         console.log("error")
//                         console.log(error);
//                     })
//                 }

//                     // setPokegotchiList(data.id)
//                     // console.log(setPokegotchiList)
//         }
//         PokegotchiList()
//     }, [])


//     return (


// ! WRITTEN WITH JOAN
//     return (

//         <div>
            
//             <img src="img/pick1.png" className='logo-image' alt="pokemon-logo"/>
//             <div>
//                 {pokegotchiList.map((pokemon) => {
//                     const {id, name, attributes } = pokemon
//                     return (
//                         <div key={id}>
//                             <h1>{name}</h1>
//                             <ul>
//                                 {attributes.map((attribute) => {
//                                     const {id, name, sprites = []} = attribute
//                                     const [sprite = null] = sprites
//                                     return (
//                                         <li key={id}>
//                                           <img src={sprite} alt={name}/> 
//                                           {name}        
//                                         </li>
//                                     )})
//                                 }
//                             </ul>
                            
//                         </div>
//                     )
//                 })}
//             </div> 

//         </div>
//     )
// }
