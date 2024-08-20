const mongoose = require ('mongoose')

const BlogSchema= new mongoose.Schema({
    title: {
        type: String
       
      },
      content: {
        type: String
        
      },
      excerpt: {
        type: String
       
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
})

const BlogModel= mongoose.model('Blogs',BlogSchema)
module.exports=BlogModel