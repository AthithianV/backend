// functions/api.js
const serverless = require("serverless-http");
const { server } = require("../dist/index");

module.exports.handler = serverless(server);