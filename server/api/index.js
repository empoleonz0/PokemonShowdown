const express = require('express');
const router = express.Router();
const authRouter = require('./routes/auth.js');
const userRouter = require('./routes/user.js');
const pokemonRouter = require('./routes/pokemon.js');
const teamRouter = require('./routes/team.js');
const botTeamRouter = require('./routes/botTeam.js');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/pokemon', pokemonRouter);
router.use('/team', teamRouter);
router.use('/botTeam', botTeamRouter)

router.get('/', (req, res, next) => {
    res.send('at /api')
})


module.exports = router;