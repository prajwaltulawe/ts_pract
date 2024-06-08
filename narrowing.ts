// narrowing is nothing more than type checking

interface User{
    name: string,
    email:string
}

interface Admin{
    name: string,
    email:string,
    isAdmin:boolean
}

function isAdmin(account: User|Admin) {
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}


function logValue(x: Date|string) {
    if (x instanceof Date) {
        console.log(x.getUTCDate())
    }
    else{
        console.log(x.toLowerCase())
    }
}


type Fish = {swim: () => void}
type Bird = {fly: () => void}
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}
function getFood(pet: Fish| Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird fish" 
    }
}

// Discreminated union is nothing but adding a type in all interfaces to identify them. eg: "kind"
interface Circle{
    kind: "circle",
    radis: number
}
interface Square{
    kind: "square",
    side: number
}

// exhaustive checking
type Shape = Circle | Square
function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        console.log("circle")
    }
    // else use switch with default to handle if anytime any new Shape is added
    // never gives error if any case is not handled, so we know what is not handled
}