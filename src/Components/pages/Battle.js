import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchTeam, fetchBotTeam } from '../../store';
import { Link } from 'react-router-dom';

const Battle = ()=> {
  const { team, botTeam } = useSelector(state => state);
  const [inBattle, setInBattle] = useState(false)
  const teamCurrentHP = [];
  const botTeamCurrentHP = [];
  const [switchedIn, setSwitchedIn] = useState(-1)
  const dispatch = useDispatch();

  const startbattle = () => {
    setInBattle(true)
    for(let i=0;i<botTeam.length;i++) {
      if (team.team[i]) {
        teamCurrentHP.push(team.team[i].stats.hp)
      }
      botTeamCurrentHP.push(botTeam[i].stats.hp)
    }
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
          <div>In battle</div>

        ) : (

          <button onClick={startbattle}>Start Battle</button>
        )}
    </div>
  );
};

export default Battle;