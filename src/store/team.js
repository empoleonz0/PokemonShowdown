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

export const fetchPokemonByName = createAsyncThunk('fetchPokemonById', async (name) => {
    try {
        const { data } = await axios.get(`/api/products/${name}`);
        return data;
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
        .addCase(fetchTeam.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(fetchPokemonByName.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default team.reducer;