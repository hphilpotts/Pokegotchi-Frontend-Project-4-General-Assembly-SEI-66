import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import Pokegotchi from './Pokegotchi';
import "./pokedex.css";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
// import List from "./Components/List"

export default function Pokedex() {
  const [isLoading, setIsLoading] = useState(true);
  const [PokegotchiList, setPokegotchiList] = useState([]);
  const [Error, setHasError] = useState([]);

  useEffect(() => {
    const PokegotchiList = async () => {
      try {
        const fetchedData = [];
        for (let i = 1; i <= 151; i++) {
          const { data } = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + i
          );
          // console.log(data.id)
          // console.log(data.name)
          // console.log(data.sprites.other["official-artwork"].front_default)
          // console.log(data, "string")
          const newPokeGotchi = {
            name: data.name,
            pokedex: data.id,
            image: data.sprites.other["official-artwork"].front_default,
          };

          // setPokegotchiList(data.id)
          // console.log(setPokegotchiList)
          fetchedData.push(newPokeGotchi);
        }
        setPokegotchiList(fetchedData);
      } catch (err) {
        setHasError({ error: true, message: err.message });
      }
    };
    PokegotchiList();
  }, []);

  useEffect(() => {
    setTimeout(function () {
      console.log("I've set a 2.5 second delay to allow everything to load");
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading" className="pdexName">
        <CircularProgress /> &nbsp; &nbsp; &nbsp; &nbsp; Catching them all...
      </div>
    );
  }

  const displayFetchedData = PokegotchiList.map(
    (item, index) => (
      <div className="grid-container">
        <div className="grid-item">
          {/* SET ONCLICK??? onClick={this.handleChange} */}
          <a href="/card">
            <Box className="pdex-card-box pdex-card-outer">
              <Box className="pdex-card-box pdex-card-inner">
                <div key={index}>
                  <img className="pdexImg" src={item.image} />
                  <p className="pdexName">
                    #{item.pokedex} {item.name}
                  </p>
                </div>
              </Box>
            </Box>
          </a>
        </div>
      </div>
    ),
    []
  );

  return (
    <div>
      <img className="tagline" src="img/pick.png"></img>
      <div className="container">{displayFetchedData}</div>
    </div>
  );
}
