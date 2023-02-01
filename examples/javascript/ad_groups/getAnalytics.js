"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AD GROUP ANALYTICS
   *
   * Passing Path Parameters:
   * - ad_account_id: required(string())
   *
   * */
  var ad_account_id = 12345;
  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    ad_group_ids: Array(String()),
    columns: Array(String()),
    granularity: Array(String()),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String()
  }
  try {
    var response = await pinterest.ad_groups.getAnalytics(ad_account_id, { query });
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
