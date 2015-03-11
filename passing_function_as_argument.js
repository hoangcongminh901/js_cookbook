function otherFunction (x, y, z) {
  x(y, z);
}

var param = function (arg1, arg2) {
  console.log(arg1 + " " + arg2);
} ;
otherFunction(param, "Hello", "World");

otherFunction(function (arg1, arg2) {
  console.log(arg1 + " " + arg2);
}, "Hello", "World")
