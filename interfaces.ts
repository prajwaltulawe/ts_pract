interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string

    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

// reopening of interface
interface User {
    github: string
}

// extending interface, if want to add more just add it in front of User
interface Admin extends User{
    role: "admin" | "tl" | "learner"
}

const hitesh: Admin = {
    dbId: 22, 
    email: "m@m.com", 
    userId: 2211,
    github: "asdf",
    role: "tl",
    startTrail: () => {
        return "started"
    },
    getCoupon(couponName: "pajya", value:10) {
        return value
    },
}
hitesh.googleId = "asdf"
console.log(hitesh.startTrail)