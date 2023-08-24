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

export const fetchPokemonById = createAsyncThunk('fetchPokemonById', async (id) => {
    try {
        const { data } = await axios.get(`/api/team/${id}`);
        return data;
    } catch (er) {
        console.log(er);
    }
});

export const addPokemon = createAsyncThunk('addPokemon', async (name) => {
    try {
        const { data } = await axios.get(`/api/pokemon/${name}`);
        return data;
    } catch (er) {
        console.log(er);
    }
});

export const updatePokemon = createAsyncThunk('updatePokemon', async (newData) => {
    const { id } = newData;
    try {
        const response = await axios.put(`/api/team/${id}`, newData)
        return response.data;
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

const team = createSlice({
    name: 'team',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addPokemon.fulfilled, (state, action) => {
            if (state.length > 0) {
                action.payload.teamId = state.length;
            } else {
                action.payload.teamId = 0;
            }
            state.push(action.payload)
        })
        .addCase(updatePokemon.fulfilled, (state, action) => {
            return state.map(pokemon => pokemon.id === action.payload.id ? action.payload : pokemon)
          })
        .addCase(deletePokemon.fulfilled, (state, action) => {
            return state.filter(product => product.teamId !== action.payload);
        })
    }
})

export default team.reducer;