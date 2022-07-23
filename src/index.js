const app = require('./config/servidor');
require('./rutas/rutas.js');

app.listen(app.get('Puerto'), (req, res)=>{
    console.log('Servidor iniciado'.bgGreen);
});