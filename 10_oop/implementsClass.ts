class Human{
    name : string;
    gender : string;

    constructor(name : string, gender : string){
        this.name = name;
        this.gender = gender;
    }

    speak(){
        return 'I am speaking';
    }
}

class Doctor implements Human{
    name : string;
    gender : string;

    constructor(name : string, gender : string){
        this.name = name;
        this.gender = gender;
    }

    speak(){
        return 'I am speaking';
    }
}

//If the subclass that implements a superclass doesn’t completely mirror its superclass, TypeScript will throw an error.
