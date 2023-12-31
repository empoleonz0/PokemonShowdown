const express = require('express');
const app = express.Router();
const {pokemon} = require('../../pokemon')

app.get('/', async(req, res, next)=>{
    try{
        res.json(pokemon);
    }catch(er){
        next(er);
    }
})

app.get('/:name', async(req, res, next)=>{
    try{
        const result = pokemon.find((pokemon) => pokemon.name === req.params.name.charAt(0).toUpperCase()+req.params.name.slice(1))
        res.json(result);
    }catch(er){
        next(er);
    }
})

module.exports = app;