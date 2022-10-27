import { useState } from "react";

// // useEffect(() => {
//     const PokegotchiSelect = async () => {
//         try {
//             const res = await axios.put('/controllers/pokegotchi', {
//                 data: {
//                     // doesnt like . ???
//                     id: {pokedex}
//                 }
//             });

//             console.log(data);
//         } catch (err) {
//             if (err.response.status === 404) {
//                 console.log('Resource could not be found!');
//             } else {
//                 console.log(err.message);
//             }
//         }
//     }
//     PokegotchiSelect()
// }, [])


// // const userId = JSON.parse(sessionStorage.getItem('userId')) // get userId item from session storage
// // loadUserDetail(userId)
// // getEditUser(userId)
// // , []):


// ! Retrieving user ID from session storage
import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
    console.log(getStorageValue)

  }
)}
