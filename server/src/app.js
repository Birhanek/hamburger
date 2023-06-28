const express = require("express")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const environment = require('./config/environmental')
const db = require('./config/dbConnection')
const blogRouter = require("./routes/blogRouter")




const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.use('/personal/blog/',blogRouter)

app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        error:{
            status: err.status || 500,
            message:err.message
        }
    })
})
app.listen(environment.environment.serverSetUp.SERVER_PORT,async()=>{
    console.log(`Server is running http://localhost:${environment.environment.serverSetUp.SERVER_PORT}`)
    await db()
})