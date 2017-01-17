// Person Constructor
var person = {};
var myPeople = [];

function personConstructor(name) {
    person = {
      name: name,
      distance_traveled: 0,
      say_name: function() {
        console.log("This person's name is:", name);
        return person;
      },
      say_something: function(someString) {
        console.log(name, "says,'" + someString + "'");
        return person;
      },
      walk: function() {
        console.log(name, "is walking");
        person.distance_traveled += 3;
        return person;
      },
      run: function() {
        console.log(name, "is running");
        person.distance_traveled += 10;
        return person;
      },
      crawl: function() {
        console.log(name, "is crawling");
        person.distance_traveled += 1;
        return person;
      }
    }
  myPeople.push(person);
  return myPeople;
}
personConstructor('Kyle');
personConstructor('Jacob');

for (var i = 0; i < myPeople.length; i++) {
  (myPeople[i]).say_name().say_something('I am awesome!');
  (myPeople[i]).walk()*i;
  (myPeople[i]).run()*i;
  (myPeople[i]).crawl()*i;
  console.log("Total distance traveled by", person.name, person.distance_traveled);
}

// Ninja Constructor
var ninja = {};
var myNinjas = [];

function ninjaConstructor(name, cohort) {
  ninja = {
    name: name,
    cohort: cohort,
    beltLevel: 'Yellow Belt',
    levelUp: function() {
      if (ninja.beltLevel == 'Yellow Belt') {
        ninja.beltLevel = 'Red Belt';
      } else if (ninja.beltLevel == 'Red Belt') {
        ninja.beltLevel = 'Black Belt';
      }
      return ninja;
    }
  }
  myNinjas.push(ninja);
  return myNinjas;
}

ninjaConstructor('Kyle', 'Online');
console.log(myNinjas);
(myNinjas[0]).levelUp();
console.log(myNinjas);


// Below is how the Ninja Constructor was solved on the answersheet:

/* This is not the only way to do this.
  Specifically: the beltArray, and the levelUp strategy.
  Notice that the function returns an object literal and to reference/update internal object pieces we call the object by name.
*/
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
