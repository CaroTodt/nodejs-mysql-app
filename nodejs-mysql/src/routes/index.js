 const express = require('express');
 const router = express.Router();
//Defino la ruta inicial
 router.get('/', (req,res)=> {
     res.send('Hello World');
 });

 module.exports = router;