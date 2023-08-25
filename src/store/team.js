import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTeam = createAsyncThunk('fetchTeam', async()=>{
    try{
        const {data}  = await axios.get('/api/team');
        return data;
    }catch(er){
        console.log(er);
    }
})

export const createTeam = createAsyncThunk('createTeam', async (team) => {
    // infinite loop for some reason?
    try {
        const { data } = await axios.post('/api/team', team);
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
        .addCase(addPokemon.fulfilled, (state, action) => {
            action.payload.teamId = counter;
            counter++
            state.push(action.payload)
        })
        .addCase(deletePokemon.fulfilled, (state, action) => {
            return state.filter(pokemon => pokemon.teamId !== action.payload);
        })
    }
})

export default team.reducer;