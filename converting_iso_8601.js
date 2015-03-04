var dtstr = "2014-3-04T19:35:32Z" ;

dtstr = dtstr.replace(/\D/g, " ");
var dtcomps = dtstr.split(" ") ;
console.log(dtcomps);
//modify month between 1 based ISO 8601 and zero based Date
console.log(dtcomps[1]--);
dtcomps[1]--;
var convdt = new Date(Date.UTC.apply(null, dtcomps)) ;
console.log(convdt.toString());
