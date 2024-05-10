const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Employees')

app.post('/take', async (req, res) => {
    const { name } = req.body;
    try {
        const product = await UserModel.findOne({ Name: name })
        console.log(product);
        if (product) {
            const { Description, Image } = product;
            console.log(Description);
            console.log(Image);
        }
        else {
            console.log("Product not found")
        }
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})