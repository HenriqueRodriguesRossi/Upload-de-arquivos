const Picture = require("../models/Picture")

exports.create = async function (req, res){
    try{
        const { name } = req.body

        /*O req.file diz que essa 
        informação será pega de uma
        propriedade chamada file*/
        const file = req.file

        const newPicture = new Picture({
            name,
            src: file.path
        })

        await newPicture.save()

        return res.status(201).send({
            mensagem: "Imagem salva com sucesso!"
        })
    }catch(error){
        return res.status(500).send({
            mensagem: "Erro ao salvar imagem!"
        })
    }
}

exports.findAll = async function (req, res){
    try{
        const pictures = Picture.find()

        res.status(200).json(pictures)
    }catch(error){
        return res.status(500).send({
            mensagem: "Erro ao listar as fotos! "
        })
    }
}