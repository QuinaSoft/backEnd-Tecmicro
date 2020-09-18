const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
app.get('/',(req,res) => {
    res.send('Somos Mubenq 2');
})
app.use(routes)
app.listen(3000, function(error){
    console.log('Funcionando')
})