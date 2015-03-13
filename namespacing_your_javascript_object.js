var jscbObject = {
  //return element
  getElem: function (identifier) {
    return document.getElementById(identifier);
  },
  stripslashes: function (str) {
    return str.replace(/\\/g, "");
  },
  removeAngleBrackets: function (str) {
    return
  }
} ;

var sample = "<div>testing\changes</div>" ;

var result = jscbObject.stripslashes(sample) ;
result = jscbObject.removeAngleBrackets(result);

console.log(result);
