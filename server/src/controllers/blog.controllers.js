const createError = require('http-errors')
const slugify = require('slugify')
const Blog = require('../model/blog')
const { create, update, deleteSingleBlog, getSingleBlog, getBlogs } = require('../services/blog.services')
const successResponseHandler = require('../middlewares/handler')

const createBlog = async(req,res,next)=>{
    try {
        const {title,description,reader_minutes} = req.body
        const avater = req.file
        if(!title || !description ){
            throw createError(404,'title or description is not found')
        }
        if(avater && avater.size > Math.pow(1024,2)){
            throw createError(400,'Maximum file size is 2Mb')
        }
        const newBlog = new Blog({
            title,
            slug:slugify(title),
            description,
            avater:avater.path,
            reader_minutes
        })

        const blog = create(newBlog)
        if(!blog){
            throw createError(400,'Blog is not created')
        }

        return successResponseHandler(res,200,'Blog is successfully created',newBlog)

    } catch (error) {
        next(error)
    }
}

const updateBlog = async(req,res,next) => {
    try {
        const {title,description,reader_minutes} =req.body
        const avater = req.file
        const {id} = req.params
        console.log(id)
        

        if(!title || !description){
            throw createError(404,'title or description is missing')
        }
        if(avater && avater.size > Math.pow(1024,2)){
            throw createError(400,'Maximum image size is 2Mb')
        }
        const blogFilter = {
            title,
            description,
            reader_minutes,
            slug:slugify(title),
            avater:avater.path
        }
        const updated = await update(id,blogFilter)
        return successResponseHandler(res,201,'blog successfully updated',updated)
    } catch (error) {
        next(error)
    }
}

const deleteBlog = async(req,res,next) => {
    try {
        const {id} = req.params
        console.log(id)
        const deletedBlog = await deleteSingleBlog(id)

        return successResponseHandler(res,200,'Blog deleted successfully',deletedBlog)
    } catch (error) {
        next(error)
    }
}
const getBlog = async(req,res,next) => {
    try {
        const {id} = req.params
        console.log(id)
        const blog = await getSingleBlog(id)

        return successResponseHandler(res,200,'Blog returned successfully',blog)
    } catch (error) {
        next(error)
    }
}
const getAllBlogs = async(req,res,next) => {
    try {
        const blogs = await getBlogs()

        return successResponseHandler(res,200,'Blog returned successfully',blogs)
    } catch (error) {
        next(error)
    }
}
module.exports ={
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog,
    getAllBlogs
}