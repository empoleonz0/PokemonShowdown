const { DataTypes } = require('sequelize');
const conn = require('./conn');
const { INTEGER, STRING, ARRAY } = conn.Sequelize;

const Team = conn.define('team', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    team: {
        type: ARRAY(STRING),
        defaultValue: [''],
        allowNull: false
    },
});

module.exports = Team;
