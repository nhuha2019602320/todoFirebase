const Router = require("koa-router");
const webhooksHandler = require("../handler/webhookHandler.js");

const router = new Router({
  prefix: "/webhook",
});

router.post("/order/new", webhooksHandler.listenNewOrder)
router.get("/order/new", async (ctx) => {
  return (ctx.body = {
    success: "true"
  });
});

module.exports = router;
