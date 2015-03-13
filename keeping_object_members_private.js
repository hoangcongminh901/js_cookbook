function Tune (song, artist) {
  var title = song ;
  this.concat = function () {
    return title + " " + artist;
  }
}

var happySongs = [] ;
happySongs[0] = new Tune("Puttings on the Ritz", "Ella Fitzgerald");

console.log(happySongs[0]);


console.log(happySongs[0].title);

//prints out correct title and artist
console.log(happySongs[0].concat());
