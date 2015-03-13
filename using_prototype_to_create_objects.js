var str = "one" ;
String.prototype.exclaim = function() {
  if (this.length == 0) {return this};
  return this + "!";
};

String.prototype.trim = function() {
  return (this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""));
};

var str2 = "two" ;

console.log("".exclaim());
console.log(str.exclaim());
console.log(str2.exclaim());

function Tune (title, artist) {
  this.concatTitleArtist = function () {
    return title + " " + artist;
  }
}

//create instance, print out values
var happySong = new Tune("Putting on the Ritz", "Ella Fitzgerald") ;

//extend the object
Tune.prototype.addCategory = function(categoryName) {
  this.category = categoryName;
};

//add category
happySong.addCategory("Swing");

//print song out to new paragraph
var song = "Title and artist: " + happySong.concatTitleArtist() + " Category: " + happySong.category ;
console.log(song);

function Tune2 (title, artist) {
  var title = title ;
  var artist = artist ;
  Tune2.prototype.concatTitleArtist = function() {
    return title + " " + artist;
  };
}

var sad = new Tune2("Sad song", "Sad Singer") ;
var happy = new Tune2("Happy", "Happy Singer") ;
var happy2 = new Tune2("Happy2", "Happy2 Singer") ;
console.log(sad.concatTitleArtist());
