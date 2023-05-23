const Koa = require("koa");
const routes = require("../routers/webhookRouter");
const app = new Koa();

app.use(routes.routes());
app.use(routes.allowedMethods());

module.exports = app;
