import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTeam = createAsyncThunk('fetchTeam', async()=>{
    try{
        const token = window.localStorage.getItem('token');
        const {data}  = await axios.get('/api/team', {
            headers: {
              authorization: token
            }
        });
        return data;
    }catch(er){
        console.log(er);
    }
})

export const createTeam = createAsyncThunk('createTeam', async (team) => {
    try {
        const { data } = await axios.post('/api/team', team);
        return data;
    } catch (er) {
        console.log(er);
    }
})

export const updateTeam = createAsyncThunk('updateTeam', async (team) => {
    try {
        const { data } = await axios.put('/api/team', team);
        return data;
    } catch (er) {
        console.log(er);
    }
})

export const addPokemon = createAsyncThunk('addPokemon', async (name) => {
    try {
        const { data } = await axios.get(`/api/pokemon/${name}`);
        return data;
    } catch (er) {
        console.log(er);
    }
});

export const deletePokemon = createAsyncThunk('deletePokemon', async (teamId) => {
    try {
        return teamId*1;
    } catch (er) {
        console.log(er);
    }
});

let counter = 0;
const team = createSlice({
    name: 'team',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTeam.fulfilled, (state, action)=> {
            return action.payload;
        })
        builder.addCase(createTeam.fulfilled, (state, action)=> {
            return action.payload;
        })
        builder.addCase(updateTeam.fulfilled, (state, action)=> {
            return action.payload;
        })
        .addCase(addPokemon.fulfilled, (state, action) => {
            action.payload.teamId = counter;
            counter++
            state.team.push(action.payload)
            console.log(state.team)
        })
        .addCase(deletePokemon.fulfilled, (state, action) => {
            state.team = state.team.filter(pokemon => pokemon.teamId !== action.payload);
            return state;
        })
    }
})

export default team.reducer;