// A superclass’s property can be overridden by re-declaring the same property in a subclass.
class A {
    print() {
        console.log("I am class A");
    }
}
class B extends A {
    print() {
        console.log('I am class B');
    }
}
// Other scenarios might exist where the functionality needs to be “extended,” not completely overridden. In these scenarios, you must call the method with the super keyword first, then implement its new functionality.
class C extends A {
    print() {
        super.print(); //I am class A
        console.log("I am clas C");
    }
}
export {};
