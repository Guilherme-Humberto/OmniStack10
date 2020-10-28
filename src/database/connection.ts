import { connect } from 'mongoose'

connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Conectado ao banco de dados"))
.catch((err) => console.log("Erro ao conectar o banco de dados " + err))