const concurrently = require("concurrently");

concurrently([{
  command: "yarn start:client",
  name: "client",
  prefixColor: "green"
}, {
  command: "yarn start:server",
  name: "server",
  prefixColor: "blue"
}], {
  prefix: "name"
})
