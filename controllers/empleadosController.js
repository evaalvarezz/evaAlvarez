var conexion=require('../config/conexion');
var empleado=require('../model/empleado');
var borrar=require("fs");
module.exports={

    index:function(req,res){ 
        empleado.obtener(conexion,function (err,datos) {
            console.log(datos);

            res.render('empleados/index', { title: 'Aplicacion',empleados:datos });
    
            
           });
            
        

    },
    crear:function(req,res){
        res.render('empleados/crear');
    },
    guardar:function (req,res) {
        console.log(req.body);
        empleado.insertar(conexion,req.body,function (err) {
             res.redirect('/empleados');

      });
            
        
    },
    eliminar:function (req,res) {
        
        empleado.retornarDatosID(conexion,req.params.id,function(err,registros) {
            var nombreImagen="public/images/"+(registros[0].imagen);
              
   
   
            if(borrar.existsSync(nombreImagen)){
               borrar.unlinkSync(nombreImagen);
   
            }
   
            empleado.borrar(conexion,req.params.id,function (err) {
               res.redirect('/empleados');
            });
   
           });
    },
    editar:function (req,res) {
        empleado.retornarDatosID(conexion,req.params.id,function(err,registros) {
            console.log(registros[0]);
            res.render('empleados/editar', {empleado:registros[0]});
        });

    },
    actualizar:function (req,res) {
        console.log(req.body.nombre);

        if (req.file) {
            if (req.file.filename) {
               
                empleado.retornarDatosID(conexion,req.body.id,function(err,registros) {
                    var nombreImagen="public/images/"+(registros[0].imagen);
                    if(borrar.existsSync(nombreImagen)){
                       borrar.unlinkSync(nombreImagen);
           
                    }
                   empleado.actualizarArchivo(conexion,req.body,req.file,funcion(err));
           
                   });
                
            }
            
        }
        
        if (req.body.nombre) {
            
            empleado.actualizar(conexion,req.body,function(err){

            }); 
        }
        res.redirect('/empleados');
        

        
    }
}