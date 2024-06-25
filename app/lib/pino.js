'use strict'

const path = require('path')

// set pino
const pino = require('pino')
const logger = pino({
    // level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    level: 'info'
})

module.exports = logger