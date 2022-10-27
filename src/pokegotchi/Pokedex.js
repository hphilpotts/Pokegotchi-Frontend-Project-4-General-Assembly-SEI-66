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
                for (let i = 1; i <= 151; i++) {
                    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
                    console.log(data.id)
                    console.log(data.name)
                    console.log(data.sprites.other["official-artwork"].front_default)
                    // console.log(data, "string")

                    setPokegotchiList(data.id)
                    // console.log(setPokegotchiList)


                }
            } catch (err) {
                setHasError({ error: true, message: err.message })
            }
        }
        PokegotchiList()
    }, [])

    return (
         <div>

         </div>
    )
// ! Spread syntax (...)?
//! Object.values()?
// ! object.keys to map through an object????

{/* //         <div>
//           {Object.keys(PokegotchiList).map((key, index) => {
//             return (
//               <div key={index}>
//                 <h2>
//                   {key}: {PokegotchiList[key]}
//                 </h2>
    
//                 <hr />
//               </div>
//             );
//           })}
//             </div>
    
//           <br />
//           <br />
//           <br />
    

//         <div>

//             {Object.values(PokegotchiList).map((value, id => {
//                 return (
//                     <div id={value}>
//                         <h2>{id}</h2>
//                         <hr />
//           </div>
//         );
//       })}
//     </div>
</div>
//   );
// }
 */}
}
