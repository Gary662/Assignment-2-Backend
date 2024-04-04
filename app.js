const express = require('express')
const app = express();
const route = require('./routes/route')
const cors = require('cors')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.use(route)
app.listen(5500);