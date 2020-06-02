##Aplicación del Clima

En esta aplicación realizo peticiones a dos servicios API Rest.
.https://rapidapi.com/dev132/api/city-geo-location-lookup
.https://openweathermap.org/
Con Yargs ingreso información por consola, lo recibe como argumento getLugar() que me retorna la longitud y latitud de la dirección.
La latitud y longitud son los argumentos de getClima() que me retorna la temperatura.
Una vez todo resuelto getInfo() me retorna la informacion requerida.

Recuerden ejecutar el "npm install" para las librerias.

###Ejemplo:
-------------
node app -d "Ciudad, Pais"
-------------