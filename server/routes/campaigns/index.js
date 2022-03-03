const Router = require("koa-router");
import getCampaignHandler from "./getCampaignHandler";
import getCampaignsHandler from "./getCampaignsHandler";

const router = new Router({prefix: "/shopify/campaigns"});

router.get("/:id", getCampaignHandler);
router.get("/", getCampaignsHandler);

export default router;
