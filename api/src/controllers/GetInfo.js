const axios = require ("axios");
const { Country, Activity } = require ('../db');
// const fs = require('fs/promises');
//primero traigo la info de la api!! 
//hay que unificar la info con el mapeo
//en la api hay paises sin info, como hago para traer esos aises igual??
const getInfoApi = async ( )=>{
   
    //    const jsonData = fs.readFileSync('./countries.json', 'utf-8');
    //    const countries = JSON.parse(jsonData);
    const URL= await axios.get('https://rest-countries.up.railway.app/v2/all')
    const countries= URL.data
    const countriesFinal= countries.map((c)=>{
        return {
            id: c.cca3,
            name: c.name.common,
            flagImage: c.flags[0],
            continent: c.continents[0],
            capital: typeof c.capital !== 'undefined' ?  c.capital[0] : 'No hay info de la capital',
            subregion: typeof c.subregion !== 'undefined' ?  c.subregion : 'No hay info de la subregión',
            area: c.area,
            population: c.population,
        };
    } );  
    return countriesFinal;
  
};
//segundo traigo la info de la Bdd, con activity tmb!! (Include?)
//si no hay info en la bdd guardo la info d ela api, con el bulkcreate
const saveApi= async ()=>{
 
    const bdd = await Country.findAll({
        include:{
            model: Activity,
            attributes: [  'activityName', 'difficulty', 'duration', 'season'],
            through: {
                attributes:[ ],
            }
        }
    });
    if (!bdd){
        const countries =  getInfoApi();
       await Country.bulkCreate(countries)
    };
    return  bdd;

}

module.exports = saveApi;





















    
