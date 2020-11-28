import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
//const express = require("express");
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';


const app = express();
//Middleware added to translate json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Connect to MongoDB & hide MongoDB URI
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/amazon-clone',
        { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("MongoDB is connected")) //shows in terminal to show we are connected
    .catch(err => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
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