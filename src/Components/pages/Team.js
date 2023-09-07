import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchTeam, createTeam, updateTeam, addPokemon, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';
import {SinglePokemon} from './';

const Team = ()=> {
  const { team, auth, user, pokemon } = useSelector(state => state);
  const dispatch = useDispatch();

  const [pokemonName, setPokemonName] = useState('')

  useEffect(() => {
    dispatch(fetchTeam());
  },[])

  const setpokemonname = (ev) => {
    setPokemonName(ev.target.value);
  };

  const createteam = () => {
    dispatch(createTeam({team: [], userId: auth.id}))
  }

  const addpokemon = () => {
    dispatch(addPokemon(pokemonName)).then(() => {
      setPokemonName('')
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
          <div>
            <button onClick={updateteam}>Save Team</button>
          </div>
          {team.team.map(pokemon => (
              <SinglePokemon key={pokemon.teamId} pokemon = {pokemon}/>
          ))}
          {Object.keys(team.team).length < 6 && (
            <form onSubmit={addpokemon}>
              <input placeholder="Add Pokemon" value = {pokemonName} onChange={setpokemonname}/>
            </form>
          )}
        </div>
      ) : (
        <div>
          <p>Start Building Your Own Team Now!</p>
          <button onClick={createteam}>Create Team</button>
        </div>
      )}
    </div>
  );
};

export default Team;