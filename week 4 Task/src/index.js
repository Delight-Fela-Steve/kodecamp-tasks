const express = require('express');
const app = express();
const {connectDatabase} = require('./config/database')
const router = require('./api/controller/products')
const user_router = require('./api/controller/users')
connectDatabase(app);

app.use()
app.use(express.json())
app.use('/products', router)
app.use('/users', user_router)
