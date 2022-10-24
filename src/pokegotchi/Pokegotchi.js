import React, { useState, useEffect } from 'react'


import './pokeIndex.css'

export default function Pokegotchi(props) {

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () =>{
    
      let generateBtn = document.querySelector('#generate-pokemon');
      generateBtn.addEventListener('click', renderEverything);  
    })
    })

  function renderEverything(){
      let allPokemonContainer = document.querySelector('#poke-container')
      allPokemonContainer.innerText = "";
      fetchKantoPokemon();
  }
  
  function fetchKantoPokemon(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(function(allpokemon){
          allpokemon.results.forEach(function(pokemon){
              fetchPokemonData(pokemon);
          })
      })
  }
  
  function fetchPokemonData(pokemon){
      let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. Example: https://pokeapi.co/api/v2pokemon/1/"
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
          renderPokemon(pokeData)
      })
  }
  
  
  function renderPokemon(pokeData){
      let allPokemonContainer = document.getElementById('poke-container');
      let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
      pokeContainer.classList.add('ui', 'card');
  
      createPokeImage(pokeData.id, pokeContainer);
  
      let pokeNumber = document.createElement('p')
      pokeNumber.innerText = `#${pokeData.id}`
  
      let pokeName = document.createElement('h4') 
      pokeName.innerText = pokeData.name
       
      pokeContainer.append(pokeName, pokeNumber); //appending all details to the pokeContainer div
      allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will hold all the pokemon cards
  }
  
  return (

  function createTypes(types, ul){
      types.forEach(function(type){
          let typeLi = document.createElement('li');
          typeLi.innerText = type['type']['name'];
          ul.append(typeLi)
      })
  },
  
  function createPokeImage(pokeID, containerDiv){
      let pokeImgContainer = document.createElement('div')
      pokeImgContainer.classList.add('sprite')
  
      let pokeImage = document.createElement('img')
      pokeImgContainer.classList.add('image')
      pokeImage.srcset = `https://cdn.traction.one/pokedex/pokemon/${pokeID}.png`
    //   pokeImage.srcset = alt="Pokemon"

  
      pokeImgContainer.append(pokeImage);
      containerDiv.append(pokeImgContainer);
  })
    }
