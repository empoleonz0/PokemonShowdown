import React, { useEffect, useState, setState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTeam, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';
import team from '../../store/team';

const SinglePokemon = (props) =>{
    let {pokemon} = props;
    const { team } = useSelector(state => state);
    const dispatch = useDispatch();

    const [level, setLevel] = useState(pokemon.level)

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        let copy = team;
        console.log(copy.team)
        copy.team.map((mon) => {
            if (mon.teamId === pokemon.teamId) {
                mon.level = level;
            }
        })
    }

    const deletepokemon = (e) => {
        dispatch(deletePokemon(e.target.value))
    }

    return(
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.types.map(type => (
                <span>{type}</span>
            ))}
            <div>
                <p>Level: </p>
                <input value = {level} onChange={handleLevelChange}></input>
            </div>
            <p>HP: {pokemon.stats.hp}</p>
            <p>ATK: {pokemon.stats.atk}</p>
            <p>DEF: {pokemon.stats.def}</p>
            <p>SPA: {pokemon.stats.spa}</p>
            <p>SPD: {pokemon.stats.spd}</p>
            <p>SPE: {pokemon.stats.spe}</p>
            <button value={pokemon.teamId} onClick={(event) => {deletepokemon(event)}}>Delete</button>
        </div>
    )
}

export default SinglePokemon;