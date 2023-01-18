interface Student {
    id:number,
    name:string,
    birthday?:Date
    score:number,
    courses: Course[]
}

interface Course {
    name:string,
    id:number,
    weight:number
}

let dataStructure:Course = {
    name:"data structure",
    id: 5,
    weight:3
}

let ehsan:Student = {
    id:1345765,
    name:"ehsan",
    score:17.67,
    courses: [
        {name:"coding", id:1,weight:4},
        {name:"algorithm", id:2,weight:3},
        dataStructure
    ]
}

console.log(ehsan.score)