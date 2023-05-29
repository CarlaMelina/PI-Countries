const saveApi = require ('../controllers/GetInfo')

const getCountriesHandler = async (req, res)=>{
    try {
    const {name} = req.query;
     const totalCountries = await saveApi();
     
     if(name){
      const countryName=  totalCountries.filter((c)=>{
            c.name.toLowerCase().includes(name.toLowerCase())
        })
        countryName? res.status(200).send(countryName) :
        res.status(404).send('No se encuentra el país buscado')
    }else{ 
        res.status(200).send(totalCountries)
       };
   } catch (error) {
    res.status(400).json({ error: error.message })
    
    };
}
   
   
    const getCountryByIdHandler = (req, res)=>{
        const {id} = req.params; 
        
            res.send('Obtengo el detalle del pais recibido por params')
        }
  
        
      
   




module.exports = { 
    getCountriesHandler,
    getCountryByIdHandler}