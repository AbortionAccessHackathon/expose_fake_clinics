'use strict'

const db = require('APP/db')
const Center = db.model('centers')

// this is '/crisisCenters'

module.exports = require('express').Router()
    //get all CPC
    .get('/',
        (req, res, next) => 
            Center.findAll()
                .then(centers => res.json(centers))
                .catch(next))