const { getLugarLatLng } = require('../lugar/lugar');
const { getClima } = require('../clima/clima');
const getInfo = async(dir) => {
    try {
        const info = await getLugarLatLng(dir);
        const clima = await getClima(info.lat, info.lng);
        return `La temperatura en ${dir} es de ${clima} grados celsius.`;
    } catch (err) {
        return `No se pudo determinar la temperatura de ${dir}`;
    }
}
module.exports = {
    getInfo,
}