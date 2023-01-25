'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = 'ad_account_id'
  var campaign_id = 'campaign_id'
  try {
    var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
