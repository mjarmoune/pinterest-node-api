'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * ad_account_id
   * product_group_promotion_id
   * */
  var ad_account_id = 12345;
  var product_group_promotion_id = 12345;
  try {
    var response = await pinterest.product_group_promotions.get(ad_account_id, product_group_promotion_id);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
