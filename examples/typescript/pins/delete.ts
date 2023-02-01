'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var pin_id = 12345;
  try {
    var response = await pinterest.pins.delete(pin_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
