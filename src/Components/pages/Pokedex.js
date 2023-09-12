import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchPokemon } from '../../store';
import { Link } from 'react-router-dom';

const Pokedex = ()=> {
  const { pokemon } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <div>
        <h1>Pokedex</h1>
        {Object.keys(pokemon).length > 0 ? (
            pokemon.map(pokemon => (
                <div>
                    <h1>{pokemon.name}</h1>
                    {pokemon.types.map(type => (
                        <span>{type}</span>
                    ))}
                    <p>HP: {pokemon.basestats.hp}</p>
                    <p>ATK: {pokemon.basestats.atk}</p>
                    <p>DEF: {pokemon.basestats.def}</p>
                    <p>SPA: {pokemon.basestats.spa}</p>
                    <p>SPD: {pokemon.basestats.spd}</p>
                    <p>SPE: {pokemon.basestats.spe}</p>
                </div>
            ))
        ) : (
            <p>No Pokemon</p>
        )}
    </div>
  );
};

export default Pokedex;