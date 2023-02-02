"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET FEEDS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * feed_id
   * */
  var query = {
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String(),
  }

  try {
    var response = await pinterest.catalogs.getFeeds({ query });
} catch (error) {
    return;
  }
};

pinsRequest();
