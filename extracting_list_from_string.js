var sentence = "This is one sentence. This is a sentence with a list of items:" + "cherries, oranges, apples, bananas. That was the list of items";
var start = sentence.indexOf(":");
var end = sentence.indexOf(".", start + 1);
var fruits = sentence.substring(start + 1, end).split(/\s*,\s*/);

var str1 ;
if (str1 == null) {console.log("bad variable");};