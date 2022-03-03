const getCampaignsHandler = async (ctx) => {
  ctx.body = {
    success: true,
    data: [
      {
        id: 1,
        name: "campaign 1",
        date: "2021-10-22"
      },
      {
        id: 2,
        name: "campaign 2",
        date: "2021-11-22"
      },
      {
        id: 3,
        name: "campaign 3",
        date: "2021-12-22"
      }
    ]
  };
};

export default getCampaignsHandler;
