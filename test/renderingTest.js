const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Your Express app
const { expect } = chai;

chai.use(chaiHttp);

describe('EJS Template Rendering', () => {
  it('should render the homepage with the correct title', (done) => {
    chai.request(app)
      .get('/')  // Assuming your EJS page is served at "/"
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('<title>'); // Check if it has a title tag
        expect(res.text).to.include('<h1>');    // Check if it has an H1 tag
        expect(res.text).to.include('<li>Coffee</li>'); // Check list items
        done();
      });
  });
});
