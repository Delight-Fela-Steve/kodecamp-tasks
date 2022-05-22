const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
const {connectDatabase} = require('./config/database');
const router = require('./api/controller/products');
const user_router = require('./api/controller/users');
connectDatabase(app);

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/products', router)
app.use('/users', user_router)
