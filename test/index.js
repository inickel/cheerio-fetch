const cheerio = require('../');
const chai = require('chai');
const expect = chai.expect;
const fetch = require('node-fetch');
describe('cheerio-fetch', function () {
  it('should return a promise', function() {
    let  p = cheerio.fetch('https://github.com/');
    expect(p).to.be.an.instanceof(fetch.Promise);
    expect(p).to.have.property('then');
  });
});
