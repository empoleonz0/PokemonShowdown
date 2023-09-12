import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import auth from './auth';
import user from './user';
import pokemon from './pokemon'
import team from './team';
import botTeam from './botTeam'

const store = configureStore({
  middleware: (defaultMiddleware)=> defaultMiddleware().concat(logger),
  reducer:{
    auth: auth,
    user: user,
    pokemon: pokemon,
    team: team,
    botTeam: botTeam,
  }
});

export default store;
export * from './auth';
export * from './user';
export * from './pokemon'
export * from './team';
export * from './botTeam';