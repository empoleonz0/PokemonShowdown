import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonByName, fetchTeam, fetchPokemonById, addPokemon, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';

const SingleTeam = () => {
    const dispatch = useDispatch();
    const { teamId } = useParams();
    const pokemon = useSelector((state) => state.team.find((pokemon) => pokemon.teamId === teamId))
    const { team, auth, user, } = useSelector(state => state);

    return (
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
    )
}

export default SingleTeam;