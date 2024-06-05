let score : number | string = 33
score = 44

type User = {
    name: string,
    num: number
}

type Admin = {
    adminName: string,
    num: number
}

let me : User | Admin
me = {name: "Prajwal", num: 7894}
me = {adminName: "Prajwal", num: 7894}

function getDbId(id: number | string){
    console.log(id)
}
getDbId(7)
getDbId("7")

// array
const data: (string | number)[] = [7,8,"asdf"]

let pi:3.14

let seatAllotment: "aisle" | "middle" | "window"