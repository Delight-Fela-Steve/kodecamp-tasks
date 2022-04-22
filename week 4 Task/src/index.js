const express = require('express');
const connectDatabase = require('./config/database');
const app = express();
const router = require('./api/controller/products')
const {conncectDatabase} = require('./config/database')
connectDatabase(app);

app.use(express.json())
app.use('/products', router)
