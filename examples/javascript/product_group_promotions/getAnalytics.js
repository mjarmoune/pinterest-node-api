'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET PRODUCT GROUP PROMOTIONS ANALYTICS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    product_group_ids: Array(String()),
    columns: Array(String()),
    granularity: String(),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String(),
  };

  try {
    var response = await pinterest.product_group_promotions.getAnalytics(ad_account_id, { query });
   } catch (error) {
    return;
  }
};

usersRequest();
