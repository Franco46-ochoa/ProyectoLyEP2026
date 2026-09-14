const request = require('supertest');
const app = require('../app'); // servidor Express

describe('GET /clients', () => {
  it('debe responder con código 200 y lista de clientes', async () => {
    const res = await request(app).get('/clients');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
