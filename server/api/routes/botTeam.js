const express = require('express');
const app = express.Router();
const {botTeam} = require('../../pokemon')

app.get('/', async(req, res, next)=>{
    try{
        res.json(botTeam);
    }catch(er){
        next(er);
    }
})

module.exports = app;