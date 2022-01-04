const pkg = require('../../package.json');

module.exports = {
  applicationName: pkg.name,
  redis: {
    port: 6379,
    client: null,
  }
};
