const conn = require("./conn");
const { UUID, UUIDV4, INTEGER, TEXT } = conn.Sequelize;

const Move = conn.define("move", {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: TEXT,
      allowNull: false,
    },
    power: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    accuracy: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    pp: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
});

module.exports = Move;