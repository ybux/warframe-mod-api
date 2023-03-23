const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/database')

class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.route();
        this.connectDb(); 
        this.middleware();
    }

    middleware(){
        this.app.use(cors());
        this.app.use( express.json());
        
    }

    route(){
        this.app.use('/',require('../routes/server'));
    }

    async connectDb(){
        await dbConnection();
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Warframe config esta funcionando en '+ this.port)
        })
    }
}

module.exports = Server;
