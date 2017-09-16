'use strict'

const db = require('APP/db')
const CrisisCenter = db.modle('crisisCenters')

// this is '/crisisCenters'

module.exports = require('express').Router()
    //get all CPC
    .get('/',
        (req, res, next) => 
            CrisisCenter.findAll()
                .then(centers => res.json(centers)
                .catch(next))
    )