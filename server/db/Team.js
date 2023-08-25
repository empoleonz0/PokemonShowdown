const { DataTypes } = require('sequelize');
const conn = require('./conn');
const { INTEGER, STRING } = conn.Sequelize;

const Team = conn.define('team', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    team: {
        type: STRING,
        defaultValue: '',
        allowNull: false
    },
});

module.exports = Team;
