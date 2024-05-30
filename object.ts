interface Vehicle{
make:string;
mode:string;
year:number;
start():void

}
interface Vehicle{
    start():void
}
function start(this:Vehicle){
    console.log("Engine started")
}

class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
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
  
  const myCar2 = new Car("Honda", "Civic", 2015)
  myCar2.start();
