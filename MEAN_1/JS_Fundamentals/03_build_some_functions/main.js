function runningLogger() {
  console.log("I'm running!");
}

function multiplyByTen(a) {
  return (a*10);
}
// console.log(multiplyByTen(5));

function stringReturnOne() {
  return ('I am function stringReturnOne!');
}

function stringReturnTwo() {
  return ('I am function stringReturnTwo!');
}

// console.log (stringReturnOne(), stringReturnTwo());

function caller(a) {
  if (typeof(a) == "function") {
    a();
  }
}

// caller(runningLogger);

function myDoubleConsoleLog(param1,param2) {
  if (typeof(param1) == "function" && typeof(param2) == "function") {
    console.log(param1(), param2());
  }
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(diddy){
  console.log("Starting...");
  setTimeout(function(){
    if (typeof (diddy) == "function"){
      console.log("About to invoke function");
      diddy(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log("Ending?...");
  return ("Interesting.");
}

// caller2(myDoubleConsoleLog);
console.log(caller2(myDoubleConsoleLog));
