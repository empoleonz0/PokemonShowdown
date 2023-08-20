const conn = require("./conn");
const User = require("./User")
const Pokemon = require("./Pokemon");
const Move = require("./Move");

Move.belongsTo(Pokemon);
Pokemon.hasMany(Move);

const syncAndSeed = async() => {
    await conn.sync({ force: true });
    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: 'moe', password: '123' }),
        User.create({ username: 'lucy', password: '123' }),
        User.create({ username: 'larry', password: '123' }),
        User.create({ username: 'ethyl', password: '123' }),
      ]);

    const [Venusaur, Charizard, Blastoise] = await Promise.all([
        Pokemon.create({
            name: 'Venusaur',
            types: ['Grass','Poison'],
            hp: 80,
            atk: 82,
            def: 83,
            spa: 100,
            spd: 100,
            spe: 80,
        }),
        Pokemon.create({
            name: 'Charizard',
            types: ['Fire','Flying'],
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100,
        }),
        Pokemon.create({
            name: 'Blastoise',
            types: ['Water'],
            hp: 79,
            atk: 83,
            def: 100,
            spa: 85,
            spd: 105,
            spe: 78,
        }),
    ]);
}

module.exports = {
    syncAndSeed,
    User,
    Pokemon,
    Move,
};