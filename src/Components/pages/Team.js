import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchTeam, createTeam, updateTeam, addPokemon, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';
import {ProductCard} from './';

const Team = ()=> {
  const { team, auth, user, pokemon } = useSelector(state => state);
  const dispatch = useDispatch();
  const [test, setTest] = useState(team)

  const [updatedTeam, setUpdatedTeam] = useState(team)

  useEffect(() => {
    dispatch(fetchTeam());
  },[])

  const createteam = () => {
    dispatch(createTeam({team: [], userId: auth.id}))
  }

  const addpokemon = () => {
    dispatch(addPokemon('Venusaur')).then(() => {
      console.log(team);
    })
  }

  const deletepokemon = (e) => {
    dispatch(deletePokemon(e.target.value)).then(() => {
      console.log(team);
    })
  }

  const updateteam = () => {
    dispatch(updateTeam(team))
  }

  return (
    <div>
      <h1>Team</h1>
      {Object.keys(team).length > 0 ? (
        <div>
          {team.team.map(pokemon => (
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
                  <button value={pokemon.teamId} onClick={(event) => {deletepokemon(event)}}>Delete</button>
              </div>
          ))}
          {Object.keys(team.team).length < 6 && (
            <div>
              <button onClick={addpokemon}>Add Pokemon</button>
            </div>
          )}
          <div>
            <button onClick={updateteam}>Save Team</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Create a Team!</p>
          <button onClick={createteam}>Create Team</button>
        </div>
      )}
    </div>
  );
};

export default Team;