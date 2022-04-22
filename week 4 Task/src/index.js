const express = require('express');
const app = express();
const {conncectDatabase} = require('./config/database')
const router = require('./api/controller/products')
connectDatabase(app);

app.use(express.json())
app.use('/products', router)
