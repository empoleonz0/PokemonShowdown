const express = require('express');
const app = express.Router();
const { Pokemon, Venusaur, Charizard } = require('../../pokemon')

app.get('/venusaur', async(req, res, next)=>{
    try{
        const venusaur = new Venusaur(100, [4, 0, 0, 252, 0, 252], [31, 31, 31, 31, 31, 31], ['Sludge Bomb'], ['Overgrow']);
        console.log('test')
        console.log(Venusaur.basestats)
        res.json(venusaur);
    }catch(er){
        next(er);
    }
})

app.get('/charizard', async (req, res, next) => {
    try {
        const charizard = new Charizard();
        res.send(charizard);
    }catch(er){
        next(er);
    }
})

module.exports = app;