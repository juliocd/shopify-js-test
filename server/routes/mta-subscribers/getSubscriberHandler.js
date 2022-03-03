import {getSubscribers} from "../../datasource/mta-api/subscriber";


const getSubscriberHandler = async (ctx) => {
  const token = process.env.MTA_API_TOKEN; //@TODO get from MTA and store in Redis ???????????
  let campaign;

  try {
    campaign = await getSubscribers(token);
  } catch (err) {
    ctx.body = {
      success: false,
      error: 'Unable to retrieve campaign'
    };
    console.log('err', err)

    return;
  }

  ctx.body = {
    success: true,
    data: campaign
  };
};

export default getSubscriberHandler;
