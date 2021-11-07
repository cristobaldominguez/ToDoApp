# ToDo App
### Configuraciones necesarias antes de ejecutar la instalación
Para hacer funcionar este proyecto lo que se requerirá es:

* **Node JS**: Alguna versión instalada; si bien el proyecto fue creado en la versión 17.01, lo importante es que se utilice cualquiera de la versión 14.5 hacia arriba.
* **PostgreSQL**: Cualquier versión podría funcionar, sin embargo el proyecto fue creado en PostgreSQL 14.0 y sería recomendable utilizar alguna versión cercana a esa. 

##### Otras especificaciones:

* Es importante que en el momento de trabajar (o hacer funcionar) en el proyecto debemos tener corriendo el servidor de psql.
* En el caso de requerir el acceso de un usuario específico a la db, se recomienda agregar esos datos en la constante db que se encuentra en el archivo config.js de la raíz del proyecto.

### Cómo ejecutar el proyecto

##### Clonar el repositorio

Para hacer un clone del repositorio se requiere tener instalado GIT y se podría realizar mediante: `git clone git@github.com:DesafioLatam/todo_app.git`. De lo contrario se puede hacer click en el botón Code > Download Zip y descomprimir el archivo una vez descargado.

Para las siguientes acciones necesitaremos estar dentro de la carpeta del proyecto, por ende deberemos entrar desde la terminal hasta esa carpeta. Las instrucciones de acceso dependerán del sistema operativo que estemos utilizando y las apps que podríamos utilizar son: PowerShell, Git Bash, terminal de Linux o la terminal de Mac. Por favor si no conoce la forma de acceder a esta carpeta desde la terminal, se recomienda buscar asesoría o en Google.


##### Configuración de la db

Una vez tenemos el repositorio en nuestro computador, necesitaremos configurar nuestra db en PostgreSQL, para eso ejecutaremos estos comandos:

1. `psql -a -f db/migrations/00_create_db.sql` -> para crear la db *
2. `psql -d todo_app -a -f db/migrations/01_create_table_todos.sql` -> crea la estructura de la tabla de ToDos
3. `psql -d todo_app -a -f db/seed/todos.sql` -> agrega información de muestra para no comenzar con una db vacía.

(*) En el caso de tener un usuario y password para acceder a psql, deberemos especificarlos en esta línea también.

##### Configuración de Node

Ya teniendo la db configurada, podremos instalar node e iniciar el proyecto:

1. `npm install` -> instala todas las depdendencias de Node
2. `npm start` -> inicia el servidor

##### Visualizar la App en el navegador

Para visualizar la app en el navegador es necesario entrar al navegador favorito y escribir la dirección siguiente: `http://localhost:3000/`. Si todos los pasos anteriores estaban correctos, el servidor debería mostrar una lista de ToDos y permitir realizar un CRUD (create, read, update, delete) de ToDos.
 
 
 
***
Es importante aclarar que cualquier problema o duda sobre la configuración de este servidor es importante recurrir a alguien que les pueda asesorar y que los oriente en caso de tener cualquier problema/error; a su vez y de ninguna forma se motiva a realizar acciones que puedan poner en riesgo la información personal del usuario o del hardware.