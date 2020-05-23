const router = require('express').Router()
const ImageController = require('../controllers/ImageController')
const multer  = require('multer')
const upload = multer({})

router.get('/',(req,res)=>{
    res.json({message:'welcome to my app'})
})

router.post('/', upload.single('url') ,ImageController.uploadImage)


module.exports = router