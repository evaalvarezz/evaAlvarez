var express = require('express');
var router = express.Router();
const empleadosController=require("../controllers/empleadosController");
/* GET home page. */
router.get('/',function(req,res,next){
    res.redirect('/empleados')
}); 

module.exports = router;
