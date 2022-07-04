<p align="center">
  <a href="https://reactjs.org">
    <img src="https://www.chipax.com/mx/wp-content/uploads/sites/2/2021/04/chipax-logo-h@2x.png" alt="Logo" width=480 height=auto>
  </a>

<h3 align="center">FullStack | Rick and Morty Challenge</h3>

<p align="center">
    <b>Juan Ignacio Sterren</b>
    <br>
    <a target:"_blank" href="https://jsterren.vercel.app/">Personal Portfolio</a>
    |
    <a target:"_blank" href="https://www.linkedin.com/in/sterrenjuan/">LinkedIn Profile</a>
  </p>

## Consigna

Consultar todos los character, locations y episodes de https://rickandmortyapi.com/ e indicar:

1. Char counter:
   
   - Cuántas veces aparece la letra "l" (case insensitive) en los nombres de todos los location.
   
   - Cuántas veces aparece la letra "e" (case insensitive) en los nombres de todos los episode.
   
   - Cuántas veces aparece la letra "c" (case insensitive) en los nombres de todos los character.
   
   - Cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados).

2. Episode locations:
   
   - Para cada episode, indicar la cantidad y un listado con las location (origin) de todos los character que aparecieron en ese episode (sin repetir).
   
   - Cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados).

Output en formato json con esta estructura

```json
[
    {
        "exercise_name": "Char counter",
        "time": "2s 545.573272ms",
        "in_time": true,
        "results": [
            {
                "char": "l",
                "count": 12345,
                "resource": "location"
            },
            {
                "char": "e",
                "count": 12345,
                "resource": "episode"
            },
            {
                "char": "c",
                "count": 12345,
                "resource": "character"
            }
        ]
    },
    {
        "exercise_name": "Episode locations",
        "time": "1s 721.975698ms",
        "in_time": true,
        "results": [
            {
                "name": "Pickle Rick",
                "episode": "S03E03",
                "locations": [
                  "Earth (C-137)",
                  "Earth (Replacement Dimension)",
                  "unknown"
                ]
            }
        ]
    }
]
```

## Tecnología utilizada

#### API:

- NestJS

- Axios

- Swagger

- Rxjs

- TypeScript (JavaScript Superset)

#### Client:

- React

- React Router V6

- Axios

- MUI (Material Tamplate)

- Vite

## Estructura del directorio API

```text
.
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── char-counter
│   │   ├── char-counter.controller.spec.ts
│   │   ├── char-counter.controller.ts
│   │   ├── char-counter.module.ts
│   │   ├── char-counter.service.spec.ts
│   │   ├── char-counter.service.ts
│   │   ├── dto
│   │   │   └── char-counter.dto.ts
│   │   └── interfaces
│   │       └── char-counter.interface.ts
│   ├── common
│   │   ├── common.module.ts
│   │   ├── constants
│   │   │   └── external.constant.ts
│   │   ├── external
│   │   │   ├── external.service.spec.ts
│   │   │   ├── external.service.ts
│   │   │   └── interfaces
│   │   │       └── external.interface.ts
│   │   ├── filters
│   │   │   └── http-exeption.filter.ts
│   │   ├── interceptors
│   │   │   └── timeout.interceptor.ts
│   │   └── utils
│   │       ├── utils.service.spec.ts
│   │       └── utils.service.ts
│   ├── dto
│   │   └── hello.dto.ts
│   ├── episode-locations
│   │   ├── dto
│   │   │   └── episode-locations.dto.ts
│   │   ├── episode-locations.controller.spec.ts
│   │   ├── episode-locations.controller.ts
│   │   ├── episode-locations.module.ts
│   │   ├── episode-locations.service.spec.ts
│   │   ├── episode-locations.service.ts
│   │   └── interfaces
│   │       └── episode-locations.interface.ts
│   ├── interfaces
│   │   └── hello.interface.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

## Estructura del directorio Client

```text
.
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── char-counter
│   │   ├── char-counter.controller.spec.ts
│   │   ├── char-counter.controller.ts
│   │   ├── char-counter.module.ts
│   │   ├── char-counter.service.spec.ts
│   │   ├── char-counter.service.ts
│   │   ├── dto
│   │   │   └── char-counter.dto.ts
│   │   └── interfaces
│   │       └── char-counter.interface.ts
│   ├── common
│   │   ├── common.module.ts
│   │   ├── constants
│   │   │   └── external.constant.ts
│   │   ├── external
│   │   │   ├── external.service.spec.ts
│   │   │   ├── external.service.ts
│   │   │   └── interfaces
│   │   │       └── external.interface.ts
│   │   ├── filters
│   │   │   └── http-exeption.filter.ts
│   │   ├── interceptors
│   │   │   └── timeout.interceptor.ts
│   │   └── utils
│   │       ├── utils.service.spec.ts
│   │       └── utils.service.ts
│   ├── dto
│   │   └── hello.dto.ts
│   ├── episode-locations
│   │   ├── dto
│   │   │   └── episode-locations.dto.ts
│   │   ├── episode-locations.controller.spec.ts
│   │   ├── episode-locations.controller.ts
│   │   ├── episode-locations.module.ts
│   │   ├── episode-locations.service.spec.ts
│   │   ├── episode-locations.service.ts
│   │   └── interfaces
│   │       └── episode-locations.interface.ts
│   ├── interfaces
│   │   └── hello.interface.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

## Descarga, instalación e inicialización

Descargar el repositorio con el método a elección haciendo click en el botón "Code▼".

### Requisitos Previos

###### Antes de inicializar el repositorio son recomendables las siguientes instalaciones.

- **[Visual Studio Code](https://code.visualstudio.com/)**

- **[Postman]([Asset 2](https://www.postman.com/downloads/))**

- **[NodeJs]([Descarga | Node.js](https://nodejs.org/es/download/))**

### Instalación y ejecución

Una vez instaladas las dependencias y descargado el repositorio.

1. Instalar las dependencias necesarios corriendo el siguiente comando en la terminal dentro del directorio api y client de forma independiente.
   
   ```sh
   npm install
   ```
   
   o
   
   ```sh
   yarn install
   ```

2. Para correr ambas aplicaciones en simultaneo ingresar el siguiente comando en la terminal dentro del directorio api
   
   ```sh
   npm run start:dev
   ```
   
   En una nueva terminal ingresar el siguiente comando dentro del directorio client
   
   ```sh
   npm run dev
   ```
   
   Luego ingrese a la dirección http://localhost:3001/ desde su navegador
   
   
   
   Para  realizar consultar a la API desde Swagger ingrese el primer comando mencionado en el paso 2 dentro de la carpeta api e ingrese a la direccion http://localhost:3000/api/docs/
   
   
   
   Para realizar consultar a la API desde POSTMAN ingrese el primer comando mencionado en el paso 2 dentro del directorio api y en POSTMAN importe un nuevo file con el siguiente contenido 
   
   ```json
   {
   	"info": {
   		"_postman_id": "242bb20d-c854-4807-8aeb-798edd1552ae",
   		"name": "Challenges",
   		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
   	},
   	"item": [
   		{
   			"name": "Chipax - Rick and Morty",
   			"item": [
   				{
   					"name": "Get all char counter",
   					"request": {
   						"method": "GET",
   						"header": [],
   						"url": {
   							"raw": "http://localhost:3000/char-counter",
   							"protocol": "http",
   							"host": [
   								"localhost"
   							],
   							"port": "3000",
   							"path": [
   								"char-counter"
   							]
   						}
   					},
   					"response": []
   				},
   				{
   					"name": "Get all episode locations",
   					"request": {
   						"method": "GET",
   						"header": [],
   						"url": {
   							"raw": "http://localhost:3000/episode-locations",
   							"protocol": "http",
   							"host": [
   								"localhost"
   							],
   							"port": "3000",
   							"path": [
   								"episode-locations"
   							]
   						}
   					},
   					"response": []
   				}
   			]
   		}
   	]
   }
   ```

En postmane encontrara los API's correspondiente para realizar consultas dentro del directorio Challenges/Chipax - Rick and Morty

## Contacto

- Juan Ignacio Sterren [Personal Portfolio](https://jsterren.vercel.app/) | [LinkedIn Profile](https://www.linkedin.com/in/sterrenjuan/)
   sterrenjuanignacio@gmail.com
