import React, { useEffect, useState, setState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTeam, updatePokemon, deletePokemon } from '../../store';
import { Link } from 'react-router-dom';
import team from '../../store/team';

const SinglePokemon = (props) =>{
    const {pokemon} = props;
    const { team } = useSelector(state => state);
    const dispatch = useDispatch();

    const [level, setLevel] = useState(pokemon.level)

    const handleLevelChange = (e) => setLevel(e.target.value*1);


    const handleSubmit = () => {
        const updatedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types,
            basestats: pokemon.basestats,
            movepool: pokemon.movepool,
            abilities: pokemon.abilities,
            level: level,
            evs: pokemon.evs,
            ivs: pokemon.ivs,
            stats: {
                hp: Math.floor((2*pokemon.basestats.hp+pokemon.ivs[0]+pokemon.evs[0]/4)*level/100)+level+10,
                atk: Math.floor((((2*pokemon.basestats.atk+pokemon.ivs[1]+pokemon.evs[1]/4)*level)/100+5)),
                def: Math.floor((((2*pokemon.basestats.def+pokemon.ivs[2]+pokemon.evs[2]/4)*level)/100+5)),
                spa: Math.floor((((2*pokemon.basestats.spa+pokemon.ivs[3]+pokemon.evs[3]/4)*level)/100+5)),
                spd: Math.floor((((2*pokemon.basestats.spd+pokemon.ivs[4]+pokemon.evs[4]/4)*level)/100+5)),
                spe: Math.floor((((2*pokemon.basestats.spe+pokemon.ivs[5]+pokemon.evs[5]/4)*level)/100+5)),
            },
            moves: pokemon.moves,
            ability: pokemon.ability,
            teamId: pokemon.teamId,
        }
        dispatch(updatePokemon(updatedPokemon));
    }

    const deletepokemon = (e) => {
        dispatch(deletePokemon(e.target.value))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{pokemon.name}</h1>
                {pokemon.types.map(type => (
                    <span>{type}</span>
                ))}
                <span>
                    <p>Level: </p>
                    <input value = {level} onChange={handleLevelChange}></input>
                </span>
                <p>HP: {pokemon.stats.hp}</p>
                <p>ATK: {pokemon.stats.atk}</p>
                <p>DEF: {pokemon.stats.def}</p>
                <p>SPA: {pokemon.stats.spa}</p>
                <p>SPD: {pokemon.stats.spd}</p>
                <p>SPE: {pokemon.stats.spe}</p>
            </form>
            <button value={pokemon.teamId} onClick={(event) => {deletepokemon(event)}}>Delete</button>
        </div>
    )
}

export default SinglePokemon;