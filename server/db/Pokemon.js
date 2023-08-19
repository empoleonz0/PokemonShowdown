const conn = require("./conn");
const { UUID, UUIDV4, INTEGER, TEXT, ARRAY } = conn.Sequelize;

const Pokemon = conn.define("pokemon", {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    types: {
      type: ARRAY(TEXT),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    hp: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    atk: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    def: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    spa: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    spd: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    spe: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
});

module.exports = Pokemon;