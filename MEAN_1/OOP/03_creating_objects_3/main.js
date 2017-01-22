function VehicleConstructor(name, wheels, passengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, wheels, passengers, speed);
  }
   // private variables/methods
  var self = this;
  var _vin;
  var vin = function() {
    if (self._vin == null){
      self._vin = '';
      var max = Math.floor(9);
      while (self._vin.length <= 16) {
        var num = (Math.floor(Math.random() * max + 1));
        self._vin += num.toString();
      }
      // console.log(self._vin);
      return self._vin;
    } else {
      // console.log(self._vin);
      return self._vin;
    }
  }

  // public attributes
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;

  this.getVin = function(){
    vin();
    console.log("The VIN for", this.name, "is:", this._vin);
    return this;
  }

  this.updateDistance = function(){
    this.distance_traveled += this.speed;
    console.log(this.distance_traveled);
    return this;
  }
}

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || 'Beep';
  console.log("" + noise, noise + "!");
  return this;
}

VehicleConstructor.prototype.move = function(){
  this.updateDistance();
  this.makeNoise();
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
  return this.distance_traveled;
}

VehicleConstructor.prototype.showVin = function(){
  return this.getVin();
}


// instantiation and invoked methods
var car = new VehicleConstructor('Car', 4, 2, 35);
var bike = new VehicleConstructor('Bike', 2, 1, 10);
var sedan = new VehicleConstructor('Sedan', 4, 5, 50);
var bus = new VehicleConstructor('Bus', 4, 9, 20);

bus.pickUp = function(addPassengers){
  var addPassengers = addPassengers || 0;
  console.log("Passenger count:", bus.passengers);
  console.log("Now boarding:", addPassengers, "new passengers.");
  bus.passengers += addPassengers;
  console.log("New passenger count:", bus.passengers);
  return bus;
}

car.showVin();
car.move();
car.checkMiles();
car.makeNoise('Beeeeeep');
car.showVin();

bus.pickUp(12).move().showVin();

bike.move().move().showVin().checkMiles();

// sedan.pickup(); // shows this method is not available for all vehicles
sedan.showVin().move().move().move().checkMiles();
