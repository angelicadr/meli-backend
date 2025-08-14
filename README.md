# meli-backend
Proyecto de ejemplo de API backend para detalles de productos (al estilo MercadoLibre).

## Alcance
Desarrollar API backend que proporcione todos los datos necesarios para la página de detalles de un artículo, inspirada en Mercadolibre. La API debe proporcionar eficientemente los detalles del producto requeridos y la información relacionada, de acuerdo con las mejores prácticas de desarrollo de backend.

## Arquitectura
docs\diagram arquitectura prueba MELI.jpg

## Requisitos
- install Node.js 18+ (recommended) o Docker
- npm

## Instalación y ejecución local
```bash
npm install
```
## Ejecutar
```bash
npm start
# o en modo desarrollo (requiere nodemon)
npm run dev
```

- API base: http://localhost:3000/api
- Swagger docs: http://localhost:3000/api/docs
- Health: http://localhost:3000/health

## Ejecutar tests
```bash
npm test
```

## Uso con Docker
1. Construir imagen y levantar contenedor
   ```bash
   docker-compose build
   docker-compose up 
   ```

2. API disponible en:
   - `GET http://localhost:3000/api/products`
   - `GET http://localhost:3000/api/products/:id`
   - `GET http://localhost:3000/api/products/search?q=texto`

3. Apagar contenedor
   ```bash
     docker-compose down
   ```

## Endpoints principales
- `GET /api/products` - lista todos los productos
- `GET /api/products/search?q=iphone` - busca productos por texto
- `GET /api/products/:id` - obtiene detalle por id

## Estructura
- `data/products.json` - datos locales JSON usados por la API (sin base de datos)
- `src/` - código fuente
- `tests/` - pruebas con Jest 

## Documentación 
Ver carpeta /docs para diseño de arquitectura, plan del proyecto y evidencia de pruebas de la API.

## Notas
- Este proyecto fue creado como entregable de una prueba técnica. No usa base de datos real.
- Incluye `Makefile` para comandos rápidos y `Dockerfile` + `docker-compose.yml` para despliegue en contenedores.

## Pila de tecnología elegida para el backend
**Lenguaje y Runtime**
- **Node.js 18 LTS**: Alta eficiencia en operaciones I/O, ecosistema maduro, soporte moderno.
**Framework principal**
- **Express.js**: Minimalista, flexible, ideal para APIs HTTP.
**Manejo de datos**
- **Archivos JSON locales** (`data/products.json`): Fuente de datos sin DB real, lectura con `fs`.
**Documentación**
- **Swagger (swagger-ui-express + YAML)**: Documentación interactiva en `/api/docs`.
**Testing**
- **Jest**: Framework de pruebas.
- **Supertest**: Tests de endpoints HTTP.

**Productividad y ejecución**
- **nodemon**: Recarga automática.
- **Makefile**: Comandos rápidos.
- **Docker & Docker Compose**: Contenerización y despliegue consistente.

**Control de código**
- `.gitignore` para excluir dependencias y archivos no necesarios.

## Integración de GenAI y herramientas modernas

Durante el desarrollo se integraron **herramientas de Inteligencia Artificial Generativa (GenAI)** y asistentes modernos para aumentar la velocidad, calidad y documentación.

**Uso de GenAI**
1. **Diseño de arquitectura**: prompts para estructura modular y responsabilidades.
2. **Generación de código base**: controladores, servicios y middlewares iniciales.
3. **Documentación**:  `swagger.yaml` básico para documentar los endpoints.
4. **Pruebas unitarias**: casos con Jest y Supertest generados con asistencia AI.

**Otras herramientas modernas**
- **VSCode + extensiones**: Editor de codigo fuente, que ayuda en la integracion de multiples lenguajes de programacion.
- **Docker**: Mismo entorno en dev y produccion
- **Diagramas**: Generación con MIRO.
- **Pruebas unitarias**: `docs/Pruebas API MELI.docx` evidencias de pruebas locales en navegador y swagger.
- **Documentación + Word**:  `README.md` ,   `/docs/Plan del proyecto.docx` con redacción clara .

**Beneficios**
- Reducción de tiempo inicial 50%.
- Documentación completa desde el inicio.
- Código modular, limpio y con menos errores.
- Prototipo funcional listo en pocas horas.