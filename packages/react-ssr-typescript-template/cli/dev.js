const concurrently = require("concurrently");

concurrently([{
  command: "yarn dev:client",
  name: "client",
  prefixColor: "green"
}, {
  command: "yarn dev:server",
  name: "server",
  prefixColor: "blue"
}], {
  prefix: "name"
})
