var mysql = require("mysql");
var con= mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'sistema'
}
);
con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('error');
        }
    }
);
module.exports=con;