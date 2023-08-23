import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPokemon = createAsyncThunk('fetchPokemon', async()=>{
    try{
        const {data}  = await axios.get('/api/pokemon');
        return data;
    }catch(er){
        console.log(er);
    }
})

export const fetchPokemonByName = createAsyncThunk('fetchPokemonByName', async (name) => {
    try {
        const { data } = await axios.get(`/api/pokemon/${name}`);
        return data;
    } catch (er) {
        console.log(er);
    }
});

const pokemon = createSlice({
    name: 'pokemon',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemon.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(fetchPokemonByName.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default pokemon.reducer;