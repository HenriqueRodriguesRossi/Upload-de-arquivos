const router = require("express").Router()
const PictureController = require("../controllers/PictureController")
const upload = require("../config/multer")

/*O upload.single("file") quer dizer que 
será submetida apenas uma foto e que 
virá do campo com o nome "file"*/
router.post("/", upload.single("file") , PictureController.create)

router.get("/busca-todas", PictureController.findAll)

module.exports = router