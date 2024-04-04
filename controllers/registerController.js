const feeList = require('../models/registrationModel');

function registerHandler(req, res){
    const register = {
        id: req.body.id,
        name: req.body.fullName,
        address: req.body.address,
        status: req.body.status,
        price: feeList[`${req.body.status}`]
    };
    res.json(register);
}

module.exports = registerHandler;