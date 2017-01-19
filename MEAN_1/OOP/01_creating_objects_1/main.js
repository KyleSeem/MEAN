/* ************** Vehicle Constructor ****************
object "vehicle" created by VehicleConstructor
vehicle properties on creation: name, # of wheels, # of passengers
vehicle method on creation: makeNoise - takes noise variable for that vehicle

objects created: car, bike, sedan and bus
additional method added to bus:
  method pickUp adds passengers to existing count
*********************** END **********************/

function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.makeNoise = function(noise){
    console.log("" + noise, noise + "!");
  }
  return vehicle;
}

var car = VehicleConstructor('Red Car', 4, 3);
car.makeNoise('Beep');

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
