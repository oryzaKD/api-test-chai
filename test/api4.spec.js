import { BASE_URL } from '../env.js';
import { loginAndGetToken } from './api1.spec.js';
import request from 'supertest'; // Ensure supertest supports ESM

describe('Endpoint API Tests Update Category', () => {
    let token;
  
    before(async () => {
      token = await loginAndGetToken(); // Ambil token dari modul
    });
  
    it('should return status 200 for Update category', (done) => {
      request(BASE_URL.URL)
        .put('/categories')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'vitamin', description: 'khusus untuk vitamin' })
        .end((err, res) => {
          if (err) return done(err);
          console.log('Response Status:', res.status); // Log status
          console.log('Response Body:', res.body); // Log body
          expect(res).to.have.status(200);
          done();
        });
    });
  });