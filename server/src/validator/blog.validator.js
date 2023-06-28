const {body} = require('express-validator')

const Create_Product = [
    body('title').
    trim().
    isEmpty().
    withMessage('missing title').
    isLength({min:3}).
    withMessage('minimum title length is 3 characters').
    isLength({max:200}).
    withMessage('maximum title length is 200 characters'),
    body('description').trim().isEmpty().withMessage('missing description')
]

module.exports = Create_Product
