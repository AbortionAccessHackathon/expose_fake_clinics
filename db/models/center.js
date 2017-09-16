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
    url: {
        type: TEXT,
        allownull: false,
        validate: {
            notEmpty: true
        }
    },
    starRating: {
        type: FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
})

module.exports.associations = (Center, {Review}) => {
    Center.hasMany(Review)
}
  