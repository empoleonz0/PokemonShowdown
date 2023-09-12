import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchBotTeam = createAsyncThunk('fetchBotTeam', async()=>{
    try{
        const {data}  = await axios.get('/api/botTeam');
        return data;
    }catch(er){
        console.log(er);
    }
})

const botTeam = createSlice({
    name: 'botTeam',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBotTeam.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default botTeam.reducer;