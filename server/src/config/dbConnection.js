const mongoose = require('mongoose')
const environment = require('../config/environmental')
const db = async()=>{
    try {
        await mongoose.connect(environment.environment.dbSetUp.MONGODB_URL)
        console.log('Connected to database')
    } catch (error) {
        console.log(error)
    }
}

module.exports = db