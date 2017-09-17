'use strict'

const {TEXT} = require('sequelize');

module.exports = db => db.define('reviews', {
    content: {
        type: TEXT,
        allowNull: false
    },
})

module.exports.associations = (Review, {Center}) => {
    Review.belongsTo(Center)
}
  