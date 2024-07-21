class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("Whatis for the dinner?");
    }
    speak() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
class Chef extends Person {
    occupation;
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
        console.log(`I am ${this.occupation}`);
    }
    cook() {
        console.log("I am cooking");
    }
}
export {};
