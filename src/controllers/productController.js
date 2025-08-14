const productService = require('../services/productService');

// Busca el producto segun el ID
exports.getProductById = (req, res, next) => {
  try {
    const product = productService.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

//retorna el listado de productos 
exports.listProducts = (req, res, next) => {
  try {
    const products = productService.listAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Busca un producto segun considencia en el nombre o categoria
exports.searchProducts = (req, res, next) => {
  try {
    const q = req.query.q || '';

    if (!q) {
      return res.status(400).json({ error: "Debe proporcionar un parámetro de búsqueda 'q'" });
    }

    const results = productService.search(q);

    if (results.length === 0) {
       return res.status(404).json({ error: "No se encontró producto con el nombre o categoría que contenga: "+q });
    }

  res.json(results);
  } catch (error) {
    next(error);
  }
};