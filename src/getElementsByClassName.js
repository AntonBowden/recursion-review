// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your code here
  const elements = [];

  function scan(node) {
    if(node.classList && Array.from(node.classList).includes(className)) {
      elements.push(node);
    }

    for(let i = 0; i < node.childNodes.length; i++) {
      scan(node.childNodes[i]);
    }
  }

  scan(document.body);

  return elements;
};