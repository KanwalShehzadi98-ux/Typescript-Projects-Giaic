class Human {
    name;
    gender;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    speak() {
        return 'I am speaking';
    }
}
class Doctor {
    name;
    gender;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    speak() {
        return 'I am speaking';
    }
}
export {};
//If the subclass that implements a superclass doesn’t completely mirror its superclass, TypeScript will throw an error.
