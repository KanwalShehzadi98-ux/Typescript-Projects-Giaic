class A{
    static index : number = 1;
}

console.log(A.index)

// getters & setters

class A1{
    private _variable : string;

    constructor(variable : string){
        this._variable = variable;
    }

    get Var(){
        return this._variable;
    }

    set Var(myVar : string){
        this._variable = myVar;
    }
}

const obj =  new A1('kanwal');
console.log(obj.Var);
obj.Var = "KanwalShehzadi";