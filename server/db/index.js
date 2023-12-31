const conn = require("./conn");
const User = require("./User")
const Team = require("./Team")

Team.belongsTo(User);
User.hasOne(Team);

const syncAndSeed = async() => {
    await conn.sync({ force: true });
    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: 'moe', password: '123' }),
        User.create({ username: 'lucy', password: '123' }),
        User.create({ username: 'larry', password: '123' }),
        User.create({ username: 'ethyl', password: '123' }),
    ]);
}

module.exports = {
    syncAndSeed,
    User,
    Team,
};