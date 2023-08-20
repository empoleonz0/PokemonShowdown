import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store';
import { Link } from 'react-router-dom';

const Team = ()=> {
  const { team } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Team</h1>
      <pre>
        {
          JSON.stringify(team, null, 2)
        }
      </pre>
    </div>
  );
};

export default Team;