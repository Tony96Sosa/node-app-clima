const axios = require('axios');

const getClima = async(lat, lng) => { //hago una peticion a un servicio API Rest https://openweathermap.org/
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7cbf8984dbdfe9a3b2b434657860404a&units=metric`); // al no tener que configurar headers, el API key es enviado en el url
    // con el await yo espero a que se resuelva, y que me retorne la data antes de ejecutar el return 
    return res.data.main.temp;
}

module.exports = {
    getClima,
}