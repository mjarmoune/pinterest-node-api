'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET KEYWORD
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  var query = {
    campaign_id: String(),
    ad_group_id: String(),
    match_types: Array(String()),
    page_size: Number(),
    bookmark: String()
  }

  try {
    var response = await pinterest.keywords.get(ad_account_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
