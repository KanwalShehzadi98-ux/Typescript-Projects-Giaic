class Person{
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log("Whatis for the dinner?");
    }

    speak(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

class Chef extends Person{
    occupation : string;

    constructor(name : string, age: number, occupation : string){
        super(name,age);
        this.occupation = occupation;
    }

    speak(){
        console.log(`I am ${this.occupation}`);
    }

    cook(){
        console.log("I am cooking");
    }
}

