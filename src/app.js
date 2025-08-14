const express = require('express');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/products', productRoutes);

// Swagger setup (loads local swagger.yaml if present)
const swaggerPath = path.join(__dirname, '..', 'swagger.yaml');
let swaggerSpec = {};
try {
  swaggerSpec = YAML.load(swaggerPath);
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
} catch (err) {
  console.warn('Swagger file not found or invalid. /api/docs disabled.');
}

// Health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`meli-backend listening on port ${PORT}`);
});

module.exports = app;
