// iterators and for..of
// original:
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
function logThis(x) {
  for(var i = 0; i < x.length; i++){
    console.log(x[i]);
  };
};
logThis(x);

// ES6:
var arr = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (var i of arr) {
  console.log(i);
}

// abbreviated function calls
// original:
function runningLogger() {
  console.log("I'm running!");
}
runningLogger();

// ES6:
var run = () => { console.log("I'm running!"); }
run();

// generators
// original:
function multiplyByTen(a) {
  return (a*10);
}
console.log(multiplyByTen(5)); // must provide all params

// ES6: no params required
var byTen = {
  [Symbol.iterator]: function*() {
    var num = 0, xTen = 10;
    for (;;) {
      var temp = num*xTen;
      num++;
      yield temp;
    }
  }
}

for (var n of byTen) {
  if (n > 100)
    break;
  console.log(n);
}
