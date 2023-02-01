"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var ad_account_id = 12345;
  try {
    var query = {
      start_date: String(Date()),
      end_date: String(Date()),
      targeting_types: Array(String()),
      columns: Array(String()),
      granularity: String(),
      click_window_days: Number(),
      engagement_window_days: Number(),
      view_window_days: Number(),
      conversion_report_time: String(),
      attribution_types: String()
    }
    var response = await pinterest.ad_accounts.getTargetedAnalytics(ad_account_id, { query });
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

pinsRequest();
