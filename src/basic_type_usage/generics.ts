interface Vehicle {
    name:string,
    id:number
}

interface LuxuryCar extends Vehicle {
    speed:number
}

let truck:Vehicle = {
    id:123,
    name:"my gradfa truck"
}

let opel:LuxuryCar = {
    id:345,
    name:"Austra",
    speed:200
}

function returnTheSame2<T1>(variable:T1) {
    return variable
}

function returnTheSame<T1 extends T2,T2>(variable:T1):T2 {
    return variable
}

function newConsole<T1,T2>(variable1:T1,variable2:T2){
    console.log(variable1)
    console.log(variable2)
}

newConsole("ehsan",123)
newConsole<string, number>("ehsan", 123)

returnTheSame2("ehsan")
returnTheSame2(123)
returnTheSame2(["a","b","v"])

let res = returnTheSame<LuxuryCar, Vehicle>(opel)
let res2 = returnTheSame(123)
let res3 = returnTheSame([1,2,4])