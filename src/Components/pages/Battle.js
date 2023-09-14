import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchTeam, fetchBotTeam } from '../../store';
import { Link } from 'react-router-dom';

const Battle = ()=> {
  const { team, botTeam } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBotTeam())
    dispatch(fetchTeam())
  }, [dispatch])

  return (
    <div>
        <h1>Bot Team</h1>
        {JSON.stringify(botTeam)}
    </div>
  );
};

export default Battle;