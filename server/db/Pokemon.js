const conn = require("./conn");
const { INTEGER } = conn.Sequelize;

const Pokemon = conn.define("pokemon", {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
});

module.exports = Pokemon;