const express = require('express')

const routes = express.Router()
routes.route('/users').get(function(req,res){

    res.send('ola api')
}).post


module.exports = routes