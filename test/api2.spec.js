import { BASE_URL } from '../env.js';
import { loginAndGetToken } from './api1.spec.js';
import request from 'supertest'; // Ensure supertest supports ESM
import * as chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const { expect } = chai;

describe('Endpoint API Tests Get List Categories', () => {
  let token;

  before(async () => {
    token = await loginAndGetToken(); // Ambil token dari modul
  });

  it('should return status 200 for GET List categories', (done) => {
    request(BASE_URL.URL)
      .get('/categories')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        console.log('Response Status:', res.status); // Log status
        console.log('Response Body:', res.body); // Log body
        expect(res).to.have.status(200);
        done();
      });
  });
});

// describe('API Test List Category', () => {
//   it('should return status 200 for authenticated GET /categories', async () => {
//     // Menggunakan token dalam header Authorization
//     const token = await loginAndGetToken(); // Ambil token dari authHelper
//     // const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MjczMWIzLWQ5NTYtNDZlYS04MzdiLWUxMjMyN2RhNzJiNSIsImNvbXBhbnlJZCI6IjE0Yjk5MWYyLTY3ODMtNGZiNS1iMDMxLThmZjE0ZjVmZjEwYiIsImlhdCI6MTcyNjcxNjg1Mn0.cNdXBq-A64jAB_iL94Z_6cP_kv7DHwDRo8H_oyhKz5k'
//     const res = request(BASE_URL.URL)
//       .get('/categories')
//       .set('Authorization', `Bearer ${token2}`)
//     // .expect(200)
//     // .end((err, res) => {
//     //   if (res) return done(res);
//     //   if (err) return done(err);
//     //   done();
//     // });
//     console.log('Response Body:', res.body);
//     console.log('Response Status:', res.status);
//     expect(res.status).toBe(200);
//   });
// });