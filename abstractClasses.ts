// use of abstract class
// we cannot create direct methods of it, we need to create it using extends

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    // abstract methods must be used in child classed
    abstract getSepia(): void
    getReelTime(): number{
        // complex logic
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: boolean
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

const praj = new Instagram("test", "test", true)
praj.getReelTime()

export {}