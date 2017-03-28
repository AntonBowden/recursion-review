// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let dummy = '';
  let item;

  if(Array.isArray(obj)) {
    for(let i = 0; i < obj.length; i++) {
      item = stringifyJSON(obj[i]);
      dummy += (item === 'undefined' ? 'null,' : `${item},`);
    }

    return `[${dummy.slice(0, -1)}]`;
  } else if(typeof obj === 'object' && obj !== null) {
    for(let key in obj) {
      item = stringifyJSON(obj[key]);

      if(item !== 'undefined') {
        dummy += `"${key}":${item},`;
      }
    }

    return `{${dummy.slice(0, -1)}}`;
  } else if(typeof obj === 'string') {
    return `"${obj}"`;
  } else if(typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  } else if(obj === undefined || typeof obj === 'function') {
    return 'undefined';
  } else if(obj === null || isNaN(obj) || obj === Infinity || obj === -Infinity) {
    return 'null';
  } else if(typeof obj === 'number') {
    return `${obj}`;
  }
};