'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * pin (pin ID)
   */
  var pin = '806144402027821208';
  try {
    var response = await pinterest.pins.deletePin(pin);
  } catch (error) {
    return;
  }
};

pinsRequest();
