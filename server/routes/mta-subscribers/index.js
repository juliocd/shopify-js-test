const Router = require("koa-router");
import getSubscriberHandler from "./getSubscriberHandler";

const router = new Router({prefix: "/mta/subscribers"});

router.get("/", getSubscriberHandler);

export default router;
