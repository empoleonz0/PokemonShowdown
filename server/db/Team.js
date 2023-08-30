const { DataTypes } = require('sequelize');
const conn = require('./conn');
const { INTEGER, JSON, ARRAY } = conn.Sequelize;

const Team = conn.define('team', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    team: {
        type: ARRAY(JSON),
        defaultValue: [],
        allowNull: false
    },
});

module.exports = Team;
