const concurrently = require("concurrently");

concurrently([{
  command: "yarn dev:server:webpack",
  name: "webpack",
  prefixColor: "green"
}, {
  command: "yarn dev:server:nodemon",
}])
