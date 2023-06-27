const createError = require("http-errors")
const Blog = require("../model/blog")

const create = async(blog) => {

    return await blog.save()
}

const update = async(id,blog) => {
    const update = await Blog.findByIdAndUpdate(id,blog,{
        new:true
    })
    if(!update){
        throw createError(400,`The blog with id=${id} is not updated`)
    }
    return update
}

const deleteSingleBlog = async(id)=>{
    const deleteBlog = await Blog.findByIdAndDelete(id)
    if(!deleteBlog){
        throw createError(404,`The blog with id=${id} is not found`)
    }
    return deleteBlog
}
const getSingleBlog = async(id) => {
    const foundBlog = await Blog.findOne({_id:id})
    if(!foundBlog){
        throw createError(404,`Blog not found`)
    }
    return foundBlog
}

const getBlogs = async()=>{
    const blogs = await Blog.find()
    if(!blogs){
        throw createError(404,`Blogs not found`)
    }
    return blogs
}

module.exports ={
    create,
    update,
    deleteSingleBlog,
    getSingleBlog,
    getBlogs
}