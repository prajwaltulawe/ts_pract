const User = {
    name: "Prajwal",
    std: 15,
    isActive: true
}

function createUser({name: string, std: number, isActive: boolean}){}
createUser({name: "string", std: "number", isActive: true})

function createCourse():{name: string, price: number}{
    return {name: "course", price: 789}
}

export {}