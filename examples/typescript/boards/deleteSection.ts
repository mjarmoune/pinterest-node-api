'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board id)
   */
  var board_id = 'board_id';
  var section_id = 'section_id'
  try {
    var response = await pinterest.boards.deleteSection(board_id, section_id);
  } catch (error) {
    return;
  }
};

boardsRequest();
