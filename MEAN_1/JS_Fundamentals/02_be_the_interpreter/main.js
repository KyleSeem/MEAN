// I'm not sure I fully understand what this assignment is asking of me. What I have done is this:
// For each problem given, I ran the original in my terminal and then recreated the problem the way I think an interpreter would. This means the result of the recreation should match the result of the original when run.

// Problem 1:
var first_variable;
console.log(first_variable);
function firstFunc(){
  first_variable = 'Not anymore!!!';
  console.log(first_variable);
}
first_variable = "Yipee I was first!";
console.log(first_variable);

// Problem 2:
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
food = 'Chicken';
eat();
console.log(food);

// Problem 3:
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = 'NEW!';
console.log(new_word);
