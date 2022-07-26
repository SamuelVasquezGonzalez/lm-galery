const app = require("../config/servidor");
const mysqlConnections = require("../config/db");
const mimeTypes = require('mime-types');
const multer = require('multer');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: "lm-galery",
  api_key: "364494937687428",
  api_secret: "nPY-_rxEVDepShph09_hXE9M3vs"

})
require('colors')

const storage = multer.diskStorage({
    destination: 'src/static/uploads',
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

app.post('/imagenes', upload.single('img'), async (req, res)=>{
  const resultado = await cloudinary.v2.uploader.upload(req.file.path);
  const { titulo, descripcion } = req.body
  mysqlConnections.query("INSERT INTO imgs SET?",{
    img_ruta: resultado.url,
    propietario: `@${req.session.usuario.username}`,
    titulo,
    descripcion
  });
  res.redirect('imagenes');
})


app.get('/imagenes', async (req, res)=>{
  await mysqlConnections.query('SELECT * FROM imgs', (err, result) =>{
    if(err){
      console.log("error en consulta o coneccion".bgRed)
    }else{
      res.render('../views/imagenes',{
        img: result
      });
    }
  });
});

