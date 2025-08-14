const request = require('supertest');
const app = require('../src/app');

describe('Products API', () => {
  it('GET /api/products should return list', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/products/MLA001 should return a product', async () => {
    const res = await request(app).get('/api/products/MLA001');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 'MLA001');
  });

  it('GET /api/products/unknown returns 404', async () => {
    const res = await request(app).get('/api/products/NOEXIST');
    expect(res.statusCode).toEqual(404);
  });

  it('GET /api/products/search?q=iphone returns results', async () => {
    const res = await request(app).get('/api/products/search').query({ q: 'iphone' });
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
