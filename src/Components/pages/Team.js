import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchTeam, fetchPokemonById, addPokemon, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';

const Team = ()=> {
  const { team } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addPokemon('venusaur'))
  }

  return (
    <div>
      <h1>Team</h1>
      <button onClick={handleClick}>Add Pokemon</button>
      <pre>
        {
          JSON.stringify(team, null, 2)
        }
      </pre>
    </div>
  );
};

export default Team;