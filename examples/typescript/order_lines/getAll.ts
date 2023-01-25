'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var ad_account_id = 'ad_account_id';
  try {
    var response = await pinterest.order_lines.get(ad_account_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
