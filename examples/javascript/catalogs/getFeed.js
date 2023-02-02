'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET FEED
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * feed_id
   * */

  var feed_id = 12345;

  var query = {
    ad_account_id: String()
  }

  try {
    var response = await pinterest.catalogs.getFeed(feed_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
