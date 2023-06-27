const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'missing a name'],
        trim:true
    },
    email:{
        type:String,
        unique:[true,'email already existed'],
        trim:true,
        lowercase:true,
        validate:{
            validator:(v)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            required:[true,'Enter proper email']
        }
    },
    message:{
        type:String,
        required:[true,'missing message']
    }
},
{
    timestamps:true
})

const Author = mongoose.model("posts",authorSchema)

module.exports = Author
