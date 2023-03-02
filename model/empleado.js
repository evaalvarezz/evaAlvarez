module.exports={
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM empleados",funcion);
    },
    insertar:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO empleados (nombre,imagen) VALUES (?,?)",[datos.nombre, archivos.filename],funcion);
    },

    borrar:function(conexion,id,funcion){
        conexion.query("DELETE FROM empleados WHERE id=?",[id],funcion);
     },
    actualizar:function(conexion,datos,archivos,funcion){
        conexion.query("UPDATE empleados SET nombre=? WHERE id=? ",[datos.nombre,datos.id],funcion);
    },
     retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM empleados WHERE id=?",[id],funcion);

    },
    actualizarArchivo:function(conexion,datos,archivo,funcion){
        conexion.query("UPDATE empleados SET imagen=? WHERE id=? ",[archivo.filename, datos.id],funcion);
    }
}