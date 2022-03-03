const getCampaignHandler = async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      id: 1,
      name: "campaign 1",
      date: "2021-10-22"
    }
  };
};

export default getCampaignHandler;
