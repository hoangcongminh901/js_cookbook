function makeString (ldelim, rdelim, str) {
  return ldelim + str + rdelim;
}

function quoteString (str) {
  return makeString("'", str, "'");
}

function barString (str) {
  return makeString("-", str, "-");
}

function namedEntity (str) {
  return makeString("&#", str, "-");
}

console.log(quoteString("apple"));
console.log(barString("apple"));

console.log(namedEntity(169));


function partial (fn /*, args...*/) {
  var args = [].slice.call(arguments, 1) ;
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function add (a, b) {
  return a + b;
}

var add100 = partial(add, 100) ;
console.log(add100(14));

var namedEntity = partial(makeString, "&#", ";") ;
console.log(namedEntity(169));

//using bind() to partially provide arguments
function makeString2 (ldelim, rdelim, str) {
  return ldelim + str + rdelim;
}

var named = makeString2.bind(undefined, "&#", ";") ;
console.log(named(169));
