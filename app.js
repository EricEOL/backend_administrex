require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const requisitionRouter = require('./routes/requisitionRouter');

mongoose.connect(
    process.env.MONGO_DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (error) => {
        if(error) {
            console.log(error);
        } else {
            console.log('MongoDB Atlas connected');
        }
    }
)


app.use('/requisition', express.json(), requisitionRouter);

app.listen(3334, ()=> console.log('Server is running...'));