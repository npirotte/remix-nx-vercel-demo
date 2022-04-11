const { createRequestHandler } = require('@remix-run/vercel');

module.exports = createRequestHandler({
  build: require('../apps/application/build/index'),
});
