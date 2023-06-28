const multer = require('multer')
const MAX_FILE_SIZE = Math.pow(1024, 2) * 1
const blogFile = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/blog/images/')
    },
    filename:(req,file,cb)=>{
        const suffix = Date.now() + '-'+ Math.round(Math.random() * 1e9)
        cb(null,suffix +'-'+ file.originalname)
    }
})

const upload = multer({
    storage:blogFile,
    limits:{fileSize:MAX_FILE_SIZE}
})

module.exports = upload