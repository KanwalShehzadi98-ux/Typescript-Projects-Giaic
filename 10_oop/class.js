class Car {
    model;
    year;
    price;
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("The car is driven by me!");
    }
    stop() {
        console.log("The car is stopped!!!");
    }
}
const tesla = new Car("A", 2309, 340000);
tesla.model = "AAA";
tesla.year = 2019;
tesla.price = 34234;
tesla.drive();
tesla.stop();
export {};
