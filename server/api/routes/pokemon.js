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
        res.json(pokemon[req.params.name]);
    }catch(er){
        next(er);
    }
})

module.exports = app;