const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', '..', 'data', 'products.json');

function loadProducts() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

exports.findById = (id) => {
  const products = loadProducts();
  return products.find(p => String(p.id) === String(id));
};

exports.listAll = () => {
  const products = loadProducts();
  return products;
};

exports.search = (query) => {
  if (!query) return [];
  const q = query.toLowerCase();
  const products = loadProducts();
  return products.filter(p =>
    (p.title && p.title.toLowerCase().includes(q)) ||
    (p.category && p.category.toLowerCase().includes(q)) ||
    (p.description && p.description.toLowerCase().includes(q))
  );
};
