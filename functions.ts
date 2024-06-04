function addTwo(num: number){
    return num+2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function registerUser(name: string, phone: number, subscribed: boolean){
    return {name, phone, subscribed}
}

let user = (name: string, phone: number, subscribed: boolean = false) =>{
    return {name, phone, subscribed}
}

console.log(addTwo(5))
console.log(getUpper("5"))
console.log(registerUser("Prajwal",7777,true))
console.log(user("Prajwal",7777))


function getNumber(num: number): number{
    return num+2
}

let fullName = (name: string): string =>{
    return name + " Tulawe"
}

const heros = ["thor", "marvel", "chondu", 1, true]
heros.map((hero): string => {
    return `hero iz : ${hero}`
})

console.log(fullName("Prajwal"))
console.log(getNumber(5))

// it means that the function returns nothing
function consoleError(errMsg: string): void{
    console.log(errMsg)
}

// it means that the function throws an exception or terminates the program
function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

export {}