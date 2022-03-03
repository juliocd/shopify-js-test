const Router = require("koa-router");
import getCustomersHandler from "./getCustomersHandler";

const router = new Router({prefix: "/shopify/customers"});

router.get("/", getCustomersHandler);

export default router;
