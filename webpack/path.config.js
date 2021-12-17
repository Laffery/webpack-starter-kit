const path = require('path');
const resolve = filename => path.resolve(__dirname, filename);

module.exports = {
  src: resolve('../src'),
  public: resolve('../public'),
  build: resolve('../dist')
}
