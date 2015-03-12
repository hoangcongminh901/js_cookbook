window.onload = function () {
  window.name = "window";
  var newObject = {
    name: "object",

    sayGreeting: function () {
      console.log("Now this is easy, " + this.name);
      nestedGreeting = function (greeting) {
        console.log(greeting + " " + this.name);
      }.bind(this);
      nestedGreeting("hello")
    }
  } ;
  newObject.sayGreeting("hello");
}