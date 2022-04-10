const fs = require("fs-extra");
const path = require('path');

const gitIgnoreTemplate =
  `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist

# misc
.vscode/
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
`;

/**
 * @param {string} outputDir 
 */
module.exports = (outputDir = '.') => {
  fs.writeFileSync(path.join(outputDir, ".gitignore"), gitIgnoreTemplate);
}