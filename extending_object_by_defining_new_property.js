var data = {} ;

Object.defineProperty(data, "type", {
  value: "primary",
  enumerable: true
})

console.log(data.type);
data.type = "secondary";
console.log(data.type);

Object.defineProperty(data, "id", {
  value: 1,
  writable: true
})

console.log(data.id);
data.id = 300;
console.log(data.id);

for(prop in data){
  console.log(prop);
}

var data2 = {} ;
var group = "history" ;

Object.defineProperty(data2, "category", {
  get: function () {
    return group;
  },
  set: function (value) {
    group = value;
  },
  enumerable: true,
  configurable: true
})

console.log(data2.category);
group = "math";
console.log(data2.category);
data2.category = "spanish";
console.log(data2.category);
console.log(group);
