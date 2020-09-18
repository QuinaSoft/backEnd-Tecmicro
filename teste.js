const sequelize = require('sequelize')
const sequelize = new sequelize('teste','root','123', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
})