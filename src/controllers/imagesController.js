const { getCloudflareService } = require('../servicelocator/composer');
const express = require('express');
const router = express.Router();

async function onNewImage(path) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.uploadImages(path);
}

async function onDeleteImage(imageId) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.deleteImage(imageId);
}
async function getImages() {
    const cloudflareService = getCloudflareService();
    const resultado = await cloudflareService.getImages();
    return resultado;
}

module.exports = {
    onNewImage, 
    onDeleteImage,
    getImages
};
