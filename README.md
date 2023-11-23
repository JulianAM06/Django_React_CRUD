# Django_React_CRUD

Ejecucion del Backend, realizado en Django Rest Framework:

1. Tener instalado Python en la version mas actualizada
2. Instalar el paquete para crear un entorno Virtual => pip install virtualenv
3. Crear el entorno Virtual => python -m virtualenv venv
4. Activamos el entorno virtual => .\venv\Scripts\activate
5. En la consola debe aparacer al principio de cada linea (venv) inidicando que estamos en un entorno virtual
6. Estando en el entorno virtual, instalamos los siguientes modulos:
7. pip install django
8. pip install djangorestframework
9. pip install django-cors-headers => Conexion al Frontend
10. pip install djoser => Conexion atraves de AXIOS  
11. pip install coreapi => Documentacion de la API
12. pip install psycopg2 => Conexion a la Base de Datos Postgres
13. python manage.py runserver 8000 => Ejecutamos el servidor local, importante realizar la conexion del Backend al puerto 8000, ya que el Frontend esta conectado a dicho puerto
14. http://127.0.0.1:8000/tareas/api/v1/tareas/ => Vamos a esta ruta para visualizar el Backend
15. http://127.0.0.1:8000/tareas/docs/ => Para visualizar la docuemntacion de la API

Ejecucion del Frontend, realizado con React:

1. Tener instalado Node.js en su version mas actualizada
2. Abrimos otra terminal diferente donde estamos ejecutando el Backend
3. cd client => Entramos a la Carpeta del Frontend
4. npm install => Instalamos modulo
5. npm run dev => http://localhost:5173/ Corremos el servidor, importante que se conecte al puerto 5173, ya que el Backend esta conectado a dicho puerto 

Ya visualizando el Frontend, es una app para un CRUD, el cual visualiza las tareas a realizar en la prueba.
Si damos click sobre una tarea, la podemos editar o actualizar y a su vez eliminar.
Tambien encontramos un boton en la parte superior derecha para crear una nueva tarea.

Django posee un ORM el cual me permite realizar la conexion directamente a Postgres y crear las Tablas.

Se usa Tailwind para realizar estilos.

   
