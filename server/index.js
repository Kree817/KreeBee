// const mongoose = require('mongoose')
// const cors = require('cors')
// const express = require('express')
// const bcrypt = require('bcrypt')

// const ContactModel = require('./models/Contacts')
// const BlogModel = require('./models/Blogs')
// const UserModel = require('./models/Users')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/contactdb")

// // To create

// app.post("/createContact", (req, res) => {
//     ContactModel.create(req.body)
//         .then(contacts => res.json(contacts))
//         .catch(err => res.json(err))
// })


// app.post("/createBlog", (req, res) => {
//     BlogModel.create(req.body)
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })






// app.post("/createUser", async (req, res) => {
//     //const ePassword = await bcrypt.hash(req.body.password, 10)
//     //req.body.password = ePassword
//     await UserModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })


// app.post("/login", (req, res) => {
//     const {email, password} = req.body;
//     UserModel.findOne({email : email})
//     .then(user => {
//         if(user) {
//            // const password = bcrypt.compare(password, user.password);
//             //if(user.password === password){
//             const checkPassword=bcrypt.compare(password,user.password)
//             if(checkPassword){
//                 res.json("Success")
//             }else{
//                 res.json("The password is incorrect")
//             }
//         }else{
//             res.json("No record existed")
//         }
//     })
// })



// // To read/get

// app.get("/getBlog", (req, res) => {
//     BlogModel.find({})
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })


// // to update
// app.get("/getBlog/:id", (req, res) => {
//     const id = req.params.id
//     BlogModel.findById({ _id: id })
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })

// app.put("/updateBlog/:id", (req, res) => {
//     const id = req.params.id
//     BlogModel.findByIdAndUpdate({ _id: id }, {
//         title: req.body.title,
//         content: req.body.content,
//         excerpt: req.body.excerpt
//     })
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })

// // to delete
// app.delete("/deleteBlog/:id", (req, res) => {
//     const id = req.params.id
//     BlogModel.findByIdAndDelete({ _id: id })
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })


// app.listen(3001, () => {
//     console.log("Server is running")
// })
























const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const ContactModel = require('./models/Contacts')
const BlogModel = require('./models/Blogs')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/KreeBee")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


// Sign-up (createUser)
app.post("/createUser", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new UserModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword
        })
        await user.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email })
        if (!user) return res.status(400).json({ message: "User not found" })

        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) return res.status(403).json({ message: "Incorrect password" })

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Protect this route with JWT
app.post("/createContact", authenticateToken, (req, res) => {
    ContactModel.create(req.body)
        .then(contacts => res.json(contacts))
        .catch(err => res.json(err))
})


//create blog
app.post("/createBlog", authenticateToken, (req, res) => {
    BlogModel.create(req.body)
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

// // Read Blog (No auth required for reading)
// app.get("/getBlog", (req, res) => {
//     BlogModel.find({})
//         .then(blogs => res.json(blogs))
//         .catch(err => res.json(err))
// })


// To read/get

app.get("/getBlog", (req, res) => {
    BlogModel.find({})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})


// to update
app.get("/getBlog/:id", (req, res) => {
    const id = req.params.id
    BlogModel.findById({ _id: id })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})


// Update Blog (Protected)
app.put("/updateBlog/:id", authenticateToken, (req, res) => {
    const id = req.params.id
    BlogModel.findByIdAndUpdate({ _id: id }, {
        title: req.body.title,
        content: req.body.content,
        excerpt: req.body.excerpt
    })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

// Delete Blog (Protected)
app.delete("/deleteBlog/:id", authenticateToken, (req, res) => {
    const id = req.params.id
    BlogModel.findByIdAndDelete({ _id: id })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
