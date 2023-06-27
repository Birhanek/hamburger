require('dotenv').config()

const environment = {
    serverSetUp:{
        SERVER_PORT:process.env.SERVER_PORT || 5001,
    },
    dbSetUp:{
        MONGODB_URL:process.env.MONGO_URL
    }
}

module.exports={
    environment
}