const mongoose= require('mongoose')
const cors= require('cors')
const express= require('express')

const ContactModel = require('./models/Contacts')
const BlogModel = require('./models/Blogs')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/contactdb")

// To create

app.post("/createContact", (req,res)=>{
    ContactModel.create(req.body)
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})


app.post("/createBlog", (req,res)=>{
    BlogModel.create(req.body)
    .then(blogs=>res.json(blogs))
    .catch(err=>res.json(err))
})
// app.post("/createUser", async (req, res) => {
//     try {
//         const { fname, lname, email, password } = req.body;
//         const existingUser = await UserModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "Email already exists" });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new UserModel({ fname, lname, email, password: hashedPassword });
//         const savedUse     r = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


app.post("/createUser", async(req,res)=>{
    //const { fname, lname, email, password } = req.body;
    //const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


// To read/get

app.get("/getBlog",(req,res)=>{
    BlogModel.find({})
    .then(blogs=>res.json(blogs))
    .catch(err=>res.json(err)) 
    })
    
// to update
app.get("/getBlog/:id", (req, res) => {
    const id = req.params.id
    BlogModel.findById({_id:id})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

app.put("/updateBlog/:id", (req, res) => {
    const id = req.params.id
    BlogModel.findByIdAndUpdate({_id:id},{
        title:req.body.title,
        content:req.body.content,
        excerpt:req.body.excerpt
    })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

// to delete
app.delete("/deleteBlog/:id", (req, res) => {
    const id = req.params.id
    BlogModel.findByIdAndDelete({ _id: id })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})


app.listen(3001,()=>{
    console.log("Server is running")
})

