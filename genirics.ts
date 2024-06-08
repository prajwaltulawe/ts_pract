const numArr: Array<number> = []
const strNames: Array<string> = []

function identity1(val: boolean|number): boolean|number {
       return val 
}

function identity2<Type>(val: Type): Type {
    return val 
}

function identity3<T>(val: T): T {
    return val 
}

interface Bootle{
    brannd: string,
    quantity: number
}

function identity4<Bootle>(val: Bootle): Bootle {
    return val 
}

function searchProd<T>(val: T[]): T {
    return val[1] 
}

// used , mainly in react to specify this is generic
const getSearch = <T,>(prods: T[]): T => {
    return prods[0]
} 

function anotherFunction<T, U>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFunction(3, "4")

function anotherFunc<T, U extends number>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFunc(3, 4)

interface Db{
    connection: string,
    userName: string,
    pass: string
}
function anotherFun<T, U extends Db>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFun(3,{connection: "", userName: "", pass:""})


export {}