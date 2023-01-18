enum CarStatus {
    Active,
    Inactive,
    New,
    Old
}

interface Car {
    name:string,
    id:number,
    status:CarStatus
}

let benz = {
    name:"GLE400",
    id:3448,
    status: CarStatus.Active
}