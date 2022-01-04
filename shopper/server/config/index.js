const pkg = require('../../package.json');

module.exports = {
  applicationName: pkg.name,
  redis: {
    port: 6379,
    client: null,
  },
  mongodb: {
    url: "mongodb://localhost:27017/shopper"
  }
};
