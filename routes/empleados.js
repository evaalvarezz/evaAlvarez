var express = require('express');

var router = express.Router();
const empleadosController=require("../controllers/empleadosController");
 var multer=require('multer');
 var fecha=Date.now();
 var rutaAlmacen=multer.diskStorage(
    {
    destination:function (request,file,callback) {
        callback(null,'./public/images/')
    },
    filename:function (request,file,callback) {
       callback(null,fecha+"_"+file.originalname);
    }
}
 );
 var cargar=multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/',empleadosController.index); 
router.get('/crear',empleadosController.crear); 
router.post("/",cargar.single("archivo"),empleadosController.guardar);
router.post("/eliminar/:id",empleadosController.eliminar);
router.post("/editar/:id",empleadosController.editar);
router.post("/actualizar",cargar.single("archivo"),empleadosController.actualizar);
module.exports = router;
