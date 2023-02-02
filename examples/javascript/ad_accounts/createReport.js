"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * CREATE AD ACCOUNT REPORT
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * */
  var ad_account_id = 12345;
  var payload = {
    start_date: "2020-12-20",
    end_date: "2020-12-20",
    granularity: "TOTAL",
    click_window_days: 1,
    engagement_window_days: 1,
    view_window_days: 1,
    conversion_report_time: "TIME_OF_AD_ACTION",
    attribution_types: ["INDIVIDUAL"],
    campaign_ids: ["12345678"],
    campaign_statuses: ["RUNNING", "PAUSED"],
    campaign_objective_types: ["AWARENESS", "VIDEO_VIEW"],
    ad_group_ids: ["12345678"],
    ad_group_statuses: ["RUNNING", "PAUSED"],
    ad_ids: ["12345678"],
    ad_statuses: ["APPROVED", "PAUSED"],
    product_group_ids: ["12345678"],
    product_group_statuses: ["RUNNING", "PAUSED"],
    product_item_ids: ["12345678"],
    targeting_types: ["APPTYPE"],
    metrics_filters: [{}],
    columns: ["SPEND_IN_MICRO_DOLLAR"],
    level: "CAMPAIGN",
    report_format: "JSON",
  };
  try {
    var response = await pinterest.ad_accounts.createReport(ad_account_id, payload);
   } catch (error) {
    return;
  }
};

pinsRequest();
