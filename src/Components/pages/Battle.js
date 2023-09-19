import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchTeam, fetchBotTeam } from '../../store';
import { Link } from 'react-router-dom';

const Battle = ()=> {
  const { team, botTeam } = useSelector(state => state);
  const [inBattle, setInBattle] = useState(false)
  const teamCurrentHP = [];
  const botTeamCurrentHP = [];
  const [switchedIn, setSwitchedIn] = useState(-1);
  const [botSwitchedIn, setBotSwitchedIn] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam());
    dispatch(fetchBotTeam());
  },[])

  const startbattle = (e) => {
    console.log(e.target.value)
    setInBattle(true)
    for(let i=0;i<botTeam.length;i++) {
      if (team.team[i]) {
        teamCurrentHP.push(team.team[i].stats.hp)
        if (e.target.value === team.team[i].name) {
          setSwitchedIn(i);
        }
      }
      botTeamCurrentHP.push(botTeam[i].stats.hp)
    }
    setBotSwitchedIn(Math.floor(Math.random()*6))
    console.log(teamCurrentHP)
    console.log(botTeamCurrentHP)
  }

  useEffect(()=>{
    dispatch(fetchBotTeam())
    dispatch(fetchTeam())
  }, [dispatch])

  return (
    <div>
        <h1>Bot Team</h1>
        { inBattle ? (
          <div>
            <h2>In battle</h2>
            <div>{JSON.stringify(botTeam[botSwitchedIn])}</div>
            <div>{JSON.stringify(team.team[switchedIn])}</div>
          </div>
        ) : (
          <div>
            <div>
              <p>Enemy Team</p>
              {botTeam.map(pokemon => (
                <p>{pokemon.name}</p>
              ))}
            </div>
            <div>
              <p>Your Team</p>
              {Object.keys(team).length > 0 ? (
                <div>
                {team.team.map(pokemon => (
                  <p>{pokemon.name}</p>
                ))}
                {team.team.map(pokemon => (
                  <button value={pokemon.name} onClick={startbattle}>{pokemon.name}</button>
                ))}
                </div>
              ) : (
                <p>Error: no team</p>
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default Battle;