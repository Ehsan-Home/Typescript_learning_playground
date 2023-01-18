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

function returnTheSame<T1 extends T2,T2>(variable:T1):T2 {
    return variable
}

let res = returnTheSame<LuxuryCar, Vehicle>(opel)
let res2 = returnTheSame(123)
let res3 = returnTheSame([1,2,4])