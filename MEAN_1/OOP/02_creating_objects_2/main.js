


function VehicleConstructor(name, wheels, passengers, speed) {
   // private variables
  var self = this;
  var distance_traveled = 0;
  // private method
  var updateDistance = function(){
    distance_traveled += self.speed;
  }

  // public attributes
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.noise = ''
  // public methods
  this.makeNoise = function(){
    console.log("" + self.noise, self.noise + "!");
  },
  this.move = function(){
    updateDistance();
    self.makeNoise();
  },
  this.checkMiles = function(){
    return console.log(distance_traveled);
  }
}

var car = new VehicleConstructor('Car', 4, 2, 35);
car.noise = 'Beep';
car.move();
car.checkMiles();

var bike = VehicleConstructor('Bike', 2, 1);
bike.makeNoise('ring');

var sedan = VehicleConstructor('Sedan', 4, 5);
sedan.makeNoise('Honk');

var bus = VehicleConstructor('Bus', 4, 6);

bus.pickUp = function(addPassengers){
  console.log("Passenger count:", bus.passengers);
  console.log("Now boarding:", addPassengers, "new passengers.");
  bus.passengers += addPassengers;
  console.log("New passenger count:", bus.passengers);
  return bus;
}
bus.pickUp(4);
