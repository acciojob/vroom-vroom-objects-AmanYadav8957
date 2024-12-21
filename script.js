// Constructor function for Car  
function Car(make, model) {  
    this.make = make; // Initialize make  
    this.model = model; // Initialize model  
}  

// Method to return the make and model of the car  
Car.prototype.getMakeModel = function() {  
    return `${this.make} ${this.model}`;  
};  

// Constructor function for SportsCar  
function SportsCar(make, model, topSpeed) {  
    Car.call(this, make, model); // Call the Car constructor to initialize make and model  
    this.topSpeed = topSpeed; // Initialize topSpeed  
}  

// Inherit the Car prototype  
SportsCar.prototype = Object.create(Car.prototype);  
SportsCar.prototype.constructor = SportsCar; // Set the constructor reference  

// Method to return the top speed of the sports car  
SportsCar.prototype.getTopSpeed = function() {  
    return this.topSpeed;  
};  

// Do not change the code below  
window.Car = Car;  
window.SportsCar = SportsCar;