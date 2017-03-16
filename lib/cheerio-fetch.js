const cheerio = require('cheerio');
const fetch = require('node-fetch');

cheerio.fetch = function(url, options) {
  options = options || {};
  return new Promise(function(resolve, reject) {
    fetch(url, options).then(function(res) {
      if (res.status != 200) {
        reject(res.text());
      } else {
        if (res.headers.get('content-type').indexOf('json') > -1) {
          return res.json();
        }
        return res.text();
      }
    }).then(function(html) {
      resolve(html);
    });
  });
};

module.exports = cheerio;
