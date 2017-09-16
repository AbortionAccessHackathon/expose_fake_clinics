'use strict'

const {TEXT} = require('sequelize');

module.exports = db => db.define('reviews', {
    content: {
        type: sequelize.TEXT,
        allowNull: false
    },
})

module.exports.associations = (Review, {CrisisCenter}) => {
    Review.belongsTo(CrisisCenter)
}
  