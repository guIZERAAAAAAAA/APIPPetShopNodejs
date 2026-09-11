import database from "../config/database.js"

class Clientes {

    constructor() { 
        this.model = database.db.define("clientis",{    //ESSE Petshop AQUI É O NOME DO TEU BANCO DE DADOS 

        
        id: {
            type: database.ds.Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nome:{
            type: database.db.Sequelize.STRING,
        },
        telefone: {
            type: database.db.Sequelize.STRING
    }
   }
  )
 }


}

export default new Clientes().model

// ##### AQUI VOCÊ IRA MODIFICAR ESSE !!ANO E !!MARCA // PARA AS PROPRIEDADES ADEQUADAS ##### //

// AQUI VOCE IRA CRIAR UMA OUTRA FILE COM O NOME CLIENTE E REFAZER ESSAS MESMAS COISAS




