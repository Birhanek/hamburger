const { createBlog, updateBlog, deleteBlog, getBlog, getAllBlogs } = require("../controllers/blog.controllers")
const upload = require("../middlewares/fileUpload")
const Create_Product = require("../validator/blog.validator")

const blogRouter = require("express").Router()


blogRouter.post('/create',upload.single('avater'),Create_Product,createBlog)
blogRouter.put('/update/:id',upload.single('avater'),Create_Product,updateBlog)
blogRouter.delete('/delete/:id',deleteBlog)
blogRouter.get('/:id',getBlog)
blogRouter.get('/',getAllBlogs)


module.exports = blogRouter