'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET PRODUCT COUNT
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * product_group_id
   * */

  var product_group_id = 12345;

  var query = {
    ad_account_id: String()
  };

  try {
    var response = await pinterest.catalogs.getProductCount(product_group_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
