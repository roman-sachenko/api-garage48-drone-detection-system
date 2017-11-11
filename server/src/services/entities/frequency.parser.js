'use strict';

module.exports = {
  parse: (data) => {
    const NEEDED_PART_LENGTH = 20;
    if(data && data.length) {
      let string      = data.toString();
      let neededPart  = string.substring(string.length - NEEDED_PART_LENGTH);
      return neededPart;
    }
    return null;
  },

  count: (data) => {
    let sum         = 0;
    let dataLength  = data.length;


    for(let index = 0; index < dataLength; index++) {
      let singleChar = data.charAt(index);
      if(parseInt(singleChar) !== 0) {
        if(singleChar == 1) {
          sum++;
        } else {
          sum+=2;
        }
      }
    }

    return sum;
  }
};