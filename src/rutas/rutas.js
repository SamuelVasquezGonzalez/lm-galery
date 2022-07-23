const app = require("../config/servidor");
const mysqlConnections = require("../config/db");
const mimeTypes = require('mime-types');
const multer = require('multer');
require('colors')

const storage = multer.diskStorage({
    destination: 'src/static/subidas',
    filename: function (req, file, cb) {
      cb("", Date.now() + "." + mimeTypes.extension(file.mimetype))
    }
  })
  
const upload = multer({ storage: storage })

app.get('/', (req, res)=>{
    res.render('../views/inicio');
});

app.get('/enviar', (req, res)=>{
  res.render('../views/enviar',{
    username: `@${req.session.usuario.username}`,
  });
});

app.post('/u', (req, res)=>{
    req.session.usuario = req.body
    res.redirect('/enviar');
});

app.post('/imagenes', upload.single('img'), (req, res)=>{
  mysqlConnections.query("INSERT INTO imgs SET?",{
    img_ruta: `subidas/${req.file.filename}`,
    propietario: `@${req.session.usuario.username}`
  });
  console.log(req.file)
  res.redirect('imagenes');
})


app.get('/imagenes', (req, res)=>{
  mysqlConnections.query('SELECT * FROM imgs', (err, result) =>{
    if(err){
      console.log("error en consulta o coneccion".bgRed)
    }else{
      res.render('../views/imagenes',{
        img: result,
        propietario: result
      });
      console.log(result)
      console.log(req.file)
    }
  });
});

