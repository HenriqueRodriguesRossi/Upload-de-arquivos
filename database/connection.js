const {MongoClient} = require("mongodb")
const uri = "mongodb://localhost/api-upload"

const client = new MongoClient(uri)
async function run(){
    try{
        await client.connect()

        console.log("Conectado com sucesso!")
    }catch(error){
        console.log(error)
    }
}

run()
module.exports = client