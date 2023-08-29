const express = require('express');
const app = express.Router();
const {Team, User} = require('../../db')

app.get('/', async(req, res, next)=>{
    try{
        const user = await User.findByToken(req.headers.authorization);
        res.send(await user.getTeam());
    }catch(er){
        next(er);
    }
})

app.post('/', async(req, res, next)=>{
    try{
        res.status(201).send(await Team.create(req.body));
    }catch(er){
        next(er);
    }
})

app.put('/', async(req, res, next) => {
    try{
        const team = await Team.findOne({
            where: {
                userId: req.body.userId,
            }
        })
        if (!team) {
            res.status(404).send('Team not found');
        } else {
            await team.update(req.body);
            res.send(team);
        }
    }catch(er){
        next(er);
    }
})

module.exports = app;