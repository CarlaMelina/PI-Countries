const { Router } = require ("express");
const { getCountriesHandler, getCountryByIdHandler } = require ('../handlers/CountryHandlers.js')
const countryRouter = Router();



countryRouter.get('/', getCountriesHandler())
countryRouter.get('/countries?name="..."', getCountriesHandler())
countryRouter.get('/:idPais', getCountryByIdHandler())


// countryRouter.get ('/', async (req, res)=>{
//     const { name } = req.query;
//     const paises = await saveApi()



// })





module.exports = countryRouter;