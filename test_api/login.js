const BASE_URL = require('../env');
const request = require('supertest');
const fs = require('fs');

const loginAndSaveToken = async () => {
  if (!fs.existsSync('token.json')) {
    const res = await request(BASE_URL.URL)
      .post('/authentications')
      .send({ email: 'maju-jaya@s.com', password: 'MajuJaya123!' });

    const tokenData = { token: res.body.token };
    fs.writeFileSync('token.json', JSON.stringify(tokenData));
  }
};

const getTokenFromFile = () => {
  const tokenData = JSON.parse(fs.readFileSync('token.json'));
  return tokenData.token;
};

module.exports = { loginAndSaveToken, getTokenFromFile };