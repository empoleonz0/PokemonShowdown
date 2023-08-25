const express = require('express');
const app = express.Router();
const {Team, User} = require('../../db')

app.get('/', async(req, res, next)=>{
    try{
        const user = await User.findByToken(req.headers.authorization);
        res.json(await user.getTeam());
    }catch(er){
        next(er);
    }
})

app.post('/', async(req, res, next)=>{
    try{
        const user = await User.findByToken(req.headers.authorization);
        res.send(await Team.create({userId: user.id}));
    }catch(er){
        next(er);
    }
})

module.exports = app;