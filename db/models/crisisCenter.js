'use strict'

const {TEXT, FLOAT} = require('sequelize');

module.exports = db => db.define('crisisCenters', {
    name: {
        type: sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    starRating: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
})

module.exports.associations = (CrisisCenter, {Review}) => {
    CrisisCenter.hasMany(Review)
}
  