'use strict'

const {TEXT, FLOAT} = require('sequelize');

module.exports = db => db.define('centers', {
    name: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    yelpUrl: {
        type: TEXT,
    },
    starRating: {
        type: FLOAT,
        validate: {
            min: 0,
            max: 5
        }
    },
})

module.exports.associations = (Center, {Review}) => {
    Center.hasMany(Review)
}
  