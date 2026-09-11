import express from "express"
import clientes from "./router/clientes.js"
import database from "./config/database.js"

const app = express()
app.use (express.json())

app.use("/api/v1/clientes", clientes)

database.db 
.sync({force: false })
.then((_) => {
    app.listen(3000, () => {
        console.log("Servidor rodand0 na porta 3000")
    })
})
.catch((e) =>{
    console.log(e)
})