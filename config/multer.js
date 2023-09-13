const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    /*destination é onde configuramos 
    qual local o arquivo vai ser salvo */
    destination: function(req, file, callback){
        /*Essa função de callback estará retornando  null para qualquer 
        eventual erro, e o segundo 
        parâmetro diz em qual pasta os 
        arquivos serão salvos*/
        callback(null, "uploads/")
    },
    /*Aqui no filename, definimos como ficará o nome do arquivo caso haja repetição no 
    nome do arquivo*/
    filename: function(req, file, callback){
        /*O último parâmetro serve para 
        a extensão do arquivo*/
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

