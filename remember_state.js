function greetingMaker (greeting) {
  function addName (name) {
    return greeting + " " + name;
  }
  return addName;
}

// Now, create new partial functions
var daytimeGreeting = greetingMaker("Good Day to you") ;
var nightGreeting = greetingMaker("Good evening") ;

var name = "abc"

console.log(daytimeGreeting(name));
console.log(nightGreeting(name));

function outerFunction () {
  var doc = document.getElementById("doc") ;
  var newObj = {"doc" : doc} ;
  doc.newObj = newObj;
}