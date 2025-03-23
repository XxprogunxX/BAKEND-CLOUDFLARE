const Servicelocator = require('./dependecyLocator');
const Cloudflare = require('../services/cloudflare');

const dl = Servicelocator.getInstance();

function init() {
    dl.bindSingleton('Cloudflare', () => Cloudflare.getInstance());
}
function getCloudflareService() {
    return dl.get('Cloudflare');
}

module.exports = { init, getCloudflareService };
