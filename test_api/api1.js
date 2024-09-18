const request = require('supertest');
const chai = require('chai');
const BASE_URL = require('./env');
const { loginAndSaveToken, getTokenFromFile } = require('./login');

const expect = chai.expect;

describe('API 1 - Protected Routes', () => {

  it('should access a protected route', async () => {
    await loginAndSaveToken(); // Dapatkan token dan simpan ke file
    
    const token = getTokenFromFile(); // Baca token dari file

    const res = await request(BASE_URL.URL)
      .get('/categories')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('data');
  });

});