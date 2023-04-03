const express =  require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', require('./todo/todo'))



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
