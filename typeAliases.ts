// type alisis
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function makeUser(user: User): User{
    return user
}

let newUser = makeUser({name: "Pajya", email: "p@p.c", isActive: true})
console.log(newUser)


// readonly will not allow to change value
type mongoUser = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number
}

// ? will be used for optional value assignment
let mongoUser1: mongoUser ={
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardDate = {
    cardDate: string
}

type cardNumber = {
    cardNumber: number
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

let userCardDetails: cardDetails
export {}