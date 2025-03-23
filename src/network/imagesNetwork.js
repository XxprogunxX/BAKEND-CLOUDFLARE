const express = require('express');
const Controller = require("../controllers/imagesController");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const routes = express.Router();

async function imagesNetwork(request, response) {
    const file = request.file; 
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}
async function deleteImageNetwork(request, response) {
    const { imageId } = request.params;
    const result = await Controller.ondeleteImage(imageId);
    response.send(result.data);
     
}
async function getImagesNetwork(request, response) {
    const result = await Controller.getImages();
    response.send(result.data);
}

routes.post("/upload", upload.single('file'), imagesNetwork);
routes.delete("/remove/:imageId", deleteImageNetwork);
routes.get("/", getImagesNetwork);
module.exports = routes;