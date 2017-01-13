var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
function logThis(x) {
  for(i = 0; i < x.length; i++){
    console.log(x[i]);
  };
};
logThis(x);
console.log('------');

x.push(100);
logThis(x);
console.log('------');

x.push(["hello", "world", "JavaScript is Fun"]);
logThis(x);
console.log('------');


var y = 0;
for (i = 0; i <= 500; i++){
  y = y + i;
};
console.log(y);
console.log('------');

var myArray = [1, 5, 90, 25, -3, 0];
for (i = 0; i < myArray.length; i++){
  var temp = myArray[i-1];
  if (myArray[i] < temp){
    var final = myArray[i];
  };
};
console.log(final);

console.log('------');

var sum = 0;
var i = 0;
while (i < myArray.length){
  sum = sum + myArray[i];
  // console.log(myArray[i]);
  i++;
};
console.log('Sum:', sum)
var myAvg = sum/(myArray.length);
console.log('Average:', myAvg);
console.log('------');

var new_ninja = {
  name:'Jessica',
  profession:'coder',
  favorite_language:'JavaScript',
  dojo:'Dallas'
};

for (var key in new_ninja){
  if (new_ninja.hasOwnProperty(key)){
    console.log(key, new_ninja[key]);
  };
};
