const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'missing title'],
        trim:true,
        minLength:[3,'minimum length of a title is 3 characters'],
        maxLength:[200,'maximum length of a title is 200 characters'],
        unique:[true,'title should be unique']
    },
    slug:{
        type:String,
        required:[true,'missing slug']
    },
    description:{
        type:String,
        required:[true,'missing description']
    },
    avater:{
        type:String,
        default:'/public/blog/images/the power of thinking.jpg'
    },
    reader_minuets:{
        type:Number,
        default:1,
    }
},
{
    timestamps:true
})

const Blog = mongoose.model('blogs',blogSchema)

module.exports = Blog