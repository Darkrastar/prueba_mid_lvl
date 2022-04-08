# prueba_mid_lvl
Este es un proyecto donde se desarrolla una simple aplicación que se puede cargar un archivo CSV, y este será enviado a una base de datos MySQL por medio de una API.

#Estructura de las carpetas

frontend-----Contiene el código de la vista al usuario, el front-end. En este proyecto se utilizó el framework de ReactJS.
backend------Contiene el código del funcionamiento de la aplicación, el back-end. En este proyecto se utilizó NodeJS como servidor gestor de la API que por medio de                  métodos Get y Post, se comunicaba con la base de datos en MySQL.
prueba1.sql--Contiene el esquema de la base de datos utilizada. Además, tiene datos introducidos para que al cargar la vista, se pueda ver la funcionalidad de la aplicación.

#Despliegue

Para el despliegue, se debe cargar primero el esquema de la base de datos, esto es para que cuando se inicie el servidor API, pueda encontrar la base de datos ya creada. Posteriormente, se inicia el servidor API, utilizando el comando 'node index.js' el cual inicia el servidor API (se debe ejecutar dentro de la carpeta backend). Por último, se inicializa la aplicación con el comando 'npm star' dentro de la carpeta frontend. Con esto funciona la aplicación sin ningún problema.

#Explicacion.

Iniciando por la base de datos, el esquema a utilizar es sencillo. Cuenta con 5 columnas (nombre, apellido, email, genero, ip) esto es porque la estructura de la base de datos debe ser fija. Luego, en el servidor API, se utilizaron diferentes librerías para el correcto funcionamiento del back-end, entre las cuales se encuentran 'express' ya que es uno de los framework más utilizados y que ofrece buenas herramientas para el despliegue. Por otro lado, tenemos 'mysql' que es la librería que permite crear las sentencias en SQL con las cuales se comunica con MySQL. Ahora, esta 'body-parser' que nos ayuda a leer el cuerpo de los datos que entran a la API por el método POST y por último, está la librería 'cors' que sirve para dar ciertos permisos y políticas cuando se hacen métodos GET desde el front-end.

Siguiendo, tenemos el frontend, para este caso se utilizó el framework de ReactJS ya que es uno de los que más se utiliza en el mercado. En las librerías utilizadas, encontramos 'Papaparse' que es una librería que nos ayuda a convertir archivos CSV a JSON, esto con la finalidad de poder enviar los datos mucho más cómodos al back-end. Tenemos también, la librería de 'bootstrap' que con ella brinda más estética a los elementos que se muestra en pantalla y por último se utilizó 'axios' ya que permite un mejor envió de los datos y recepción de los mismo, con los métodos POST y GET, respectivamente.




