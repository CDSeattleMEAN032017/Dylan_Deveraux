function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed){
  if (!(this instanceof VehicleConstructor)){
      // the constructor was called without "new".
      return new VehicleConstructor(name, number_of_wheels, number_of_passengers, speed);
    };
  // private variable to generate vin #
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  // Attributes
  this.name=name;
  this.number_of_wheels=number_of_wheels;
  this.number_of_passengers=number_of_passengers;
  this.speed = speed;
  this.distance_travelled = 0;
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }
};
// Methods for VehicleConstructor
VehicleConstructor.prototype.updateDistance = function(){
    this.distance_travelled += this.speed;
    return this
  };

VehicleConstructor.prototype.makeNoise = function(){
    if (this.number_of_wheels<0){
      console.log("Your're vehicle doesnt seem to have any wheels... you might want to do something about that");
    }
    else if (this.number_of_wheels<3){
      console.log("BWAAAAAHHHP");
    }
    else if (this.number_of_wheels<5){
      console.log("Beep beep!");
    }
    else {
      console.log("I'm destroying the environment!");
    }
    return this;
  };

VehicleConstructor.prototype.move = function(){
  this.updateDistance();
  this.makeNoise();
};
VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
}


// creating instances of the VehicleConstructor function
var bus = new VehicleConstructor("Bus", 8, 16, 35);
var bike = new VehicleConstructor("Bike", 2, 1, 15);
var sedan = new VehicleConstructor("Sedan", 4, 5, 60);
console.log(bus);
bus.checkMiles();
bus.move();
bus.checkMiles();
console.log(bus);
