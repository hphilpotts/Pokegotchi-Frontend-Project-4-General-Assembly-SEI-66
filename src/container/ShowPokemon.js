/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemon } from '../redux/actions/index';
import '../container/Pokemon.css';

const ShowPokemon = ({ pokemon: { pokemon, loading }, getPokemon, match }) => {
  useEffect(() => {
    const { id } = match.params;
    getPokemon(id);
    // eslint-disable-next-line
  }, [loading]);
  return pokemon && loading === null ? <h1>loading...</h1> : (
    <div className="row">
      <div className="col-md-6 poke-img">
        <h2>{pokemon.name}</h2>
        <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt="img" style={{ width: '25rem' }} />
      </div>
      <div className="col-md-6 card poke-card" style={{ width: '35rem' }}>
        <div className="height">
          <h3>HEIGHT</h3>
          <p>{pokemon.height}</p>
        </div>
        <div className="weight">
          <h3>WEIGHT</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div className="experience">
          <h3>XP</h3>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="abilities">
          <h3>ABILITIES</h3>
          {pokemon.abilities ? pokemon.abilities.map(ab => <span className="ability" key={ab.ability.name}>{ab.ability.name}</span>) : 'undefined' }
        </div>
        <div className="types">
          <h3>Type</h3>
          {pokemon.types ? pokemon.types.map(type => <span className="type" key={type.type.name}>{type.type.name}</span>) : 'undefined' }
        </div>
      </div>

      <Link to="/" className="text-center"><button type="button">Back to list</button></Link>
    </div>
  );
};

ShowPokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
  getPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProp, { getPokemon })(ShowPokemon);