//Question :01 

let obj1 = {
    name : "Person 1",
    age : 5
}
let obj2 = {
    age : 5,
    name : "Person 1"
}

JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(Object.is(obj1,obj2));

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log(true);
}
else{
    console.log(false);
}


// ------------------------------------------------------ //

//Question :02

var request = new XMLHttpRequest();
console.log(request);
request.open("GET", "https://restcountries.com/v3.1/all");
console.log(request.open("GET", "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i of result) {
    console.log(i.flags);
  }
};


// ------------------------------------------------------ //

//Question :03

var request = new XMLHttpRequest();
console.log(request);
request.open("GET", "https://restcountries.com/v3.1/all");
console.log(request.open("GET", "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i of result) {
    console.log(i.name.common);
    console.log(i.region);
    console.log(i.subregion);
    console.log(i.population);
  }
};