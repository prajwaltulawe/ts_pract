class User {
    private email: string
    public name: string
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

let prajwal = new User("p@p.p", "pt")
console.log(prajwal)

// pros method
class UserPro {
    protected _courserCount: number = 7

    constructor(
        private email: string, 
        public name: string
    ){}
 
    private deleteToken(){
        console.log("deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courserCount
    }
    
    // setter cant have return type
    set courseCount(courseCount){
        if(courseCount){
            throw new Error("dasfsd af ds")
        }
        this._courserCount = courseCount
    }
}

class SubUser extends UserPro{
    isFamilt: boolean = true
    changeCourseCount(){
        this._courserCount = 4
    }
}

// eg
interface TakePhoto{
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story{
    createStory():void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public flask: boolean
    ){}

    createStory(): void {
        console.log("story")
    }
}


export {}
