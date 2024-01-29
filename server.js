const express = require('express');
const dotenv = require('dotenv').config();
// const http = require('http');
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
