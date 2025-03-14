const request = require('supertest');
const app = require('../app');

describe('EJS Template Rendering', () => {
  it('should render the homepage with the correct title', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/) // Check if it's HTML
      .expect(200)  // Check if the status code is 200
      .expect((res) => {
        // Check if the response contains elements
        if (!res.text.includes('<title>')) throw new Error('Title tag not found');
        if (!res.text.includes('<h1>')) throw new Error('H1 tag not found');
        if (!res.text.includes('<li>Coffee</li>')) throw new Error('List item "Coffee" not found');
      })
      .end(done);
  });
});
