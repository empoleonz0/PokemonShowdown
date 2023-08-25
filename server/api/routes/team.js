const express = require('express');
const app = express.Router();
const {Team, User} = require('../../db')

app.get('/', async(req, res, next)=>{
    try{
        const user = await User.findByToken(req.headers.authorization);
        res.json(await user.getTeams());
    }catch(er){
        next(er);
    }
})

module.exports = app;