const express = require('express')
const route = express.Router();
const registerHandler = require('../controllers/registerController')

route.get('/', (req, res) => {
    res.send('working');
});

route.post('/register', (req, res) => {
    registerHandler(req, res)
})

module.exports = route;