const conn = require("./conn");
const Pokemon = require("./Pokemon");
const Move = require("./Move");

Pokemon.belongsToMany(Move);
Move.belongsToMany(Pokemon);

const syncAndSeed = async() => {
    await conn.sync({ force: true });
}

module.exports = {
    syncAndSeed,
    Pokemon,
    Move
};