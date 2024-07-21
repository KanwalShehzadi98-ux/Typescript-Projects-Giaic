class A {
    static index = 1;
}
console.log(A.index);
// getters & setters
class A1 {
    _variable;
    constructor(variable) {
        this._variable = variable;
    }
    get Var() {
        return this._variable;
    }
    set Var(myVar) {
        this._variable = myVar;
    }
}
const obj = new A1('kanwal');
console.log(obj.Var);
obj.Var = "KanwalShehzadi";
export {};
