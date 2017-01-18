// 1
function sumAll(x,y){
  var sum;
  for (sum = 0; x <= y; x++){
    sum = sum+x;
  };
  console.log(sum);
}
// sumAll(1,10);

// 2
function minVal(myArray) {
  if (Array.isArray(myArray)) {
    for (var i = 0; i < myArray.length; i++) {
      var temp = myArray[i-1];
      if (myArray[i] < temp) {
        var final = myArray[i];
      }
    }
    return final;
  } else {
    return ('The parameter was not an array.');
  }
}
// console.log(minVal(5));
// console.log(minVal([1, 5, 90, 25, -3, 0]));

// 3
function avgVal(myArray) {
  if (Array.isArray(myArray)) {
    var sum = 0;
    var i = 0;
    while (i < myArray.length) {
      sum = sum + myArray[i];
      i++;
    }
    var avg = sum/myArray.length;
    return avg;
  } else {
    return ('The parameter provided was not an array.');
  }
}
// console.log(avgVal(5));
// console.log(avgVal([1, 5, 90, 25, -3, 0]));

// 4 - rewrite as variables
var getSum = function(x, y) {
  for (var sum = 0; x <= y; x++) {
    sum = sum + x;
  }
  return sum;
}
console.log(getSum(1,10));

var getMin = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i-1];
    if (arr[i] < temp) {
      var final = arr[i];
    }
  }
  return final;
}
console.log(getMin([1,5,90,25,-3,0]));

var getAvg = function(arr) {
  var sum = 0;
  var i = 0;
  while (i < arr.length) {
    sum = sum + arr[i];
    i++;
  }
  var avg = sum/arr.length;
  return avg;
}
// console.log(getAvg([1,5,90,25,-3,0]));

// 5 - rewrite as methods of an object
var myFuncs = {
  getSum: function(x,y) {
    for (var sum = 0; x <= y; x++) {
      sum = sum + x;
    }
    return sum;
  },
  getMin: function(arr) {
    for (var i = 0; i <arr.length; i++) {
      var temp = arr[i-1];
      if (arr[i] < temp) {
        var min = arr[i];
      }
    }
    return min;
  },
  getAvg: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  }
}
// console.log(myFuncs.getSum(1,10));

// 6
var person = {
  name: 'Kyle',
  distance_traveled: 0,
  say_name: function() {
    console.log(person.name);
    return person;
  },
  say_something: function(someString) {
    console.log(someString, 'likes cats.');
    return person;
  },
  walk: function() {
    console.log(person.name, 'is walking.');
    person.distance_traveled += 3;
    return person;
  },
  run: function() {
    console.log(person.name, 'is running.');
    person.distance_traveled += 10;
    return person;
  },
  crawl: function() {
    console.log(person.name, 'is crawling.');
    person.distance_traveled += 1;
    return person;
  }
}
console.log(person.name, person.distance_traveled);
person.say_name();
person.say_something('Your mom');
person.walk().run().crawl();
console.log('total distance:', person.distance_traveled);
