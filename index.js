const cors = require('cors');
const express = require('express');
const routes = require('./src/routes');
const { init } = require('./src/servicelocator/composer');

const app = express();
const port = 5005;

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Asegurarse de poder manejar JSON

init();
routes(app);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
