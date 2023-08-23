const express = require('express');
const app = express.Router();
const {team} = require('../../pokemon')

app.get('/', async(req, res, next)=>{
    try{
        res.json(team);
    }catch(er){
        next(er);
    }
})

module.exports = app;