let imgur = require('imgur')

class ImageController {
    static uploadImage (req,res) {
        const encoded = req.file.buffer.toString('base64')
        
        imgur.uploadBase64(encoded)
            .then( json => {
                res.status(201).json({
                    url: json.data.link
                })
            })
            .catch(err => {
                console.error(err.message);
            })
    }
}

module.exports = ImageController