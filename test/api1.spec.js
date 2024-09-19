// const request = require('supertest');
// const BASE_URL = require('../env');
import request from 'supertest'
import { BASE_URL } from '../env.js';

let token;

export async function loginAndGetToken() {
  if (!token) {
    const res = await request(BASE_URL.URL)
      .post('/authentications')
      .send({ email: 'maju-jaya@s.com', password: 'MajuJaya123!' });
    token = res.body.data.accessToken;
    console.log('Fetched Token:', token); // Log token
  }
  return token;
}

// export const loginAndGetToken = async () => {
//   describe('API Test Login', async () => {
//     if (!token) {
//       const res = await request(BASE_URL.URL)
//         .post('/authentications')
//         .send({ email: 'maju-jaya@s.com', password: 'MajuJaya123!' });
        
//       token = res.body.token;
//     }
//     return token;
//   })
  
// };