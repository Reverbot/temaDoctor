const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/', (req, res) => {
        res.render('index');
    });
    
    router.get('/nosotros', (req, res) => {
        res.render('nosotros',{
            pagina: 'Sobre Nosotros'
        });
    });

    router.get('/servicios', (req, res) => {
        res.render('servicios',{
            pagina: 'Servicios'
        });
    });
    router.get('/contacto', (req, res) => {
        res.render('contacto',{
            pagina: 'Contacto'
        });
    });


    return router;
}