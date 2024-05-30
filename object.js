"use strict";
function start() {
    console.log("Engine started");
}
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Engine started");
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Output: "Engine started"
const myCar2 = new Car("Honda", "Civic", 2015);
myCar2.start();
