const { argv } = require('./config/yargs');
//console.log(argv.direccion);
const { getInfo } = require('./info/info');

// lugar.getLugarLatLng(argv.direccion)
//     .then(res => { console.log(res) })
// clima.getClima(-34.610001, -58.369999)
//     .then(res => { console.log(res) })
//     .catch(err => { console.log(err) });
getInfo(argv.direccion)
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });