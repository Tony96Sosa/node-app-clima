const axios = require('axios'); //Peticion a un servicio Rest por medio de axios que devuelve promesas

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir); //la funcion encodeURI le agrega caracteres extraños a la direccion para que pueda utilizarlo correctamente la url de la API
    //console.log(encodeURL); para mostrar como agregaba el caracter
    const instance = axios.create({ //intancia de la peticion que hago con el paquete axios que me retorna promesas 
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`, //coloco la url de la api a la cual quiero hacerle peticiones https://rapidapi.com/dev132/api/city-geo-location-lookup
        //timeout: 1000, no nesecito un timeout por ahora
        headers: { 'x-rapidapi-key': '0bd29655f8msh6c760cc10bd9901p1731e1jsna4a9f169329c' } //coloco en el header, el key y el value que me proporciona la api
    });

    const res = await instance.get() //realizo la petición por metodo Get
        // .then(res => {
        //     console.log(res.data.Results[0]);
        // })
        // .catch(err => {
        //     console.log('ERROR!!!!!!!!', err);
        // })
    if (res.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para la dirección ${dir}`);
    }
    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng,
    }

}

module.exports = {
    getLugarLatLng,
}