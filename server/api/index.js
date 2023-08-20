const express = require('express');
const router = express.Router();
const authRouter = require('./routes/auth.js')
const userRouter = require('./routes/user.js');
const pokemonRouter = require('./routes/pokemon.js')

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/pokemon', pokemonRouter);

router.get('/', (req, res, next) => {
    res.send('at /api')
})


module.exports = router;