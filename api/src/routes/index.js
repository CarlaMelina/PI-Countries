const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activityRouter = require ('./ActivityRoutes.js')
const countryRouter = require ('./CountryRoutes.js') 

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use('/activities', activityRouter )
routes.use('/countries', countryRouter)


module.exports = routes;
