import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
//const express = require("express");
import data from './data.js';
import userRouter from './routers/userRouter.js';


const app = express();
//Connect to MongoDB & hide MongoDB URI
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/amazon-clone',
        { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("MongoDB is connected")) //shows in terminal to show we are connected
    .catch(err => console.log(err));


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('Server is running')
});
//Show error
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});
const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})