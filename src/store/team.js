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

export const addPokemon = createAsyncThunk('addPokemon', async (pokemon) => {
    try {
        const { data } = await axios.post('/api/team', pokemon);
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
        await axios.delete(`/api/team/${teamId}`);
        return teamId;
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
            return [...state, action.payload];
        })
        .addCase(updatePokemon.fulfilled, (state, action) => {
            return state.map(pokemon => pokemon.id === action.payload.id ? action.payload : pokemon)
          })
        .addCase(deletePokemon.fulfilled, (state, action) => {
            return state.filter(product => product.id !== action.payload);
        })
    }
})

export default team.reducer;