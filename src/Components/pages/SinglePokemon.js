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
    const [hpEV, setHpEV] = useState(pokemon.evs[0])
    const [atkEV, setAtkEV] = useState(pokemon.evs[1])
    const [defEV, setDefEV] = useState(pokemon.evs[2])
    const [spaEV, setSpaEV] = useState(pokemon.evs[3])
    const [spdEV, setSpdEV] = useState(pokemon.evs[4])
    const [speEV, setSpeEV] = useState(pokemon.evs[5])

    const handleLevelChange = (e) => setLevel(e.target.value*1);
    const handleHpEVChange = (e) => {
        if (e.target.value*1+atkEV+defEV+spaEV+spdEV+speEV <= 508) {
            setHpEV(e.target.value*1);
        }
    }
    const handleAtkEVChange = (e) => {
        if (hpEV+e.target.value*1+defEV+spaEV+spdEV+speEV <= 508) {
            setAtkEV(e.target.value*1);
        }
    }
    const handleDefEVChange = (e) => {
        if (hpEV+atkEV+e.target.value*1+spaEV+spdEV+speEV <= 508) {
            setDefEV(e.target.value*1);
        }
    }
    const handleSpaEVChange = (e) => {
        if (hpEV+atkEV+defEV+e.target.value*1+spdEV+speEV <= 508) {
            setSpaEV(e.target.value*1);
        }
    }
    const handleSpdEVChange = (e) => {
        if (hpEV+atkEV+defEV+spaEV+e.target.value*1+speEV <= 508) {
            setSpdEV(e.target.value*1);
        }
    }
    const handleSpeEVChange = (e) => {
        if (hpEV+atkEV+defEV+spaEV+spdEV+e.target.value*1 <= 508) {
            setSpeEV(e.target.value*1);
        }
    }

    useEffect(() => {
        const updatedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types,
            basestats: pokemon.basestats,
            movepool: pokemon.movepool,
            abilities: pokemon.abilities,
            level: level,
            evs: [hpEV, atkEV, defEV, spaEV, spdEV, speEV],
            ivs: pokemon.ivs,
            stats: {
                hp: Math.floor((2*pokemon.basestats.hp+pokemon.ivs[0]+hpEV/4)*level/100)+level+10,
                atk: Math.floor((((2*pokemon.basestats.atk+pokemon.ivs[1]+atkEV/4)*level)/100+5)),
                def: Math.floor((((2*pokemon.basestats.def+pokemon.ivs[2]+defEV/4)*level)/100+5)),
                spa: Math.floor((((2*pokemon.basestats.spa+pokemon.ivs[3]+spaEV/4)*level)/100+5)),
                spd: Math.floor((((2*pokemon.basestats.spd+pokemon.ivs[4]+spdEV/4)*level)/100+5)),
                spe: Math.floor((((2*pokemon.basestats.spe+pokemon.ivs[5]+speEV/4)*level)/100+5)),
            },
            moves: pokemon.moves,
            ability: pokemon.ability,
            teamId: pokemon.teamId,
        }
        dispatch(updatePokemon(updatedPokemon));
    }, [level, hpEV, defEV, spaEV, spdEV, speEV])

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
                <p>
                    Level:
                    <input type="number" min="1" max="100" value = {level} onChange={handleLevelChange}></input>
                </p>
            </div>
            <p>TeamID: {pokemon.teamId}</p>
            <p>
                HP: {pokemon.stats.hp}
                <input type="number" min="0" max="252" value = {hpEV} onChange={handleHpEVChange}></input>
            </p>
            <p>
                ATK: {pokemon.stats.atk}
                <input type="number" min="0" max="252" value = {atkEV} onChange={handleAtkEVChange}></input>
            </p>
            <p>
                DEF: {pokemon.stats.def}
                <input type="number" min="0" max="252" value = {defEV} onChange={handleDefEVChange}></input>
            </p>
            <p>
                SPA: {pokemon.stats.spa}
                <input type="number" min="0" max="252" value = {spaEV} onChange={handleSpaEVChange}></input>
            </p>
            <p>
                SPD: {pokemon.stats.spd}
                <input type="number" min="0" max="252" value = {spdEV} onChange={handleSpdEVChange}></input>
            </p>
            <p>
                SPE: {pokemon.stats.spe}
                <input type="number" min="0" max="252" value = {speEV} onChange={handleSpeEVChange}></input>
            </p>
            <button value={pokemon.teamId} onClick={(event) => {deletepokemon(event)}}>Delete</button>
        </div>
    )
}

export default SinglePokemon;