import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchTeam, fetchPokemonById, addPokemon, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';
import {ProductCard} from './';

const Team = ()=> {
  const { team, auth, user, pokemon } = useSelector(state => state);
  const dispatch = useDispatch();

  const addpokemon = () => {
    dispatch(addPokemon('Venusaur'))
  }

  return (
    <div>
      <h1>Team</h1>
      {Object.keys(team).length > 0 ? (
            team.map(pokemon => (
                <div>
                    <h1>{pokemon.name}</h1>
                    {pokemon.types.map(type => (
                        <span>{type}</span>
                    ))}
                    <p>Level: {pokemon.level}</p>
                    <p>HP: {pokemon.stats.hp}</p>
                    <p>ATK: {pokemon.stats.atk}</p>
                    <p>DEF: {pokemon.stats.def}</p>
                    <p>SPA: {pokemon.stats.spa}</p>
                    <p>SPD: {pokemon.stats.spd}</p>
                    <p>SPE: {pokemon.stats.spe}</p>
                    <button onClick={dispatch(deletePokemon(pokemon.teamId))}>Delete</button>
                </div>
            ))
        ) : (
            <p>Create a Team!</p>
        )}
      {Object.keys(team).length < 6 ? (
        <button onClick={addpokemon}>Add Pokemon</button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Team;