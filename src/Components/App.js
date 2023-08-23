import React, { useEffect } from 'react';
import { Home, Login, Team, Pokedex} from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(auth.id){}
  }, [auth]);
  return (
    <div>
      <h1>Pokemon Battle Simulator</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to ='/pokedex'>Pokedex</Link>
              <Link to='/team'>Team</Link>
            </nav>
            <Routes>
              <Route path='/team' element={ <Team /> } />
              <Route path='/pokedex' element={<Pokedex/>}/>
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;