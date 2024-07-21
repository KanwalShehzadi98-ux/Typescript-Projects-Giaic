// class A {}

// class B extends A{}
// class C extends A{}

// class D extends B,C {}

// SOLUTION

class A{}
interface B extends A{}
interface C extends B{}
class D implements B,C{}