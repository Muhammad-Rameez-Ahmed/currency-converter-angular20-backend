// api/index.js
const serverless = require("serverless-http");

// require compiled app from dist (TypeScript compiles src/app.ts → dist/app.js)
let app = require("../dist/app");
app = app && app.default ? app.default : app;

module.exports = serverless(app);
