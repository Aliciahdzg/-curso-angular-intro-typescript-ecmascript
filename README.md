# Angular-intro-typescript

* Al descargar el codigo ejecutar el comando:
 ```
 npm install
 ```
 con este comando descargará todos los modulos de node necesarios para ejecutar el proyecto
 
 * Al terminar de instalar los node_modules ejecutar el proyecto con el siguiente comando
 ```
 npm start
 ```
 Para que eso funciones, recuerda ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json``` 
 
 # Cambiar puerto
 
 Por defecto para este proyecto esta configurado el puerto ```8081```, si necesitas cambiarlo, hacerlo desde el ```package.json``` >> scripts. Ahi esta la instruccion que lanza el servicio de desarrollo
 ```
 "start": "webpack-dev-server --mode development --open --port=8081"
 ```
 Cambia el puerto al que necesites y listo, graba los cambios antes de ejecutar ```npm start``` nuevamente
 
