const customExpress = require('./config/customExpress')
const app = customExpress()
const connection = require('./infra//connection')


connection.connect( erro => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log('Banco de dados conectado com sucesso!!!')
        app.listen(3000, ()=> console.log("servidor rodando na porta 3000, acesse: http://localhost:3000"))
    }

})