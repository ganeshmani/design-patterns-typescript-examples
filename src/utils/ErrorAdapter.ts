
import NewCustomError from './NewCustomError'
// import CustomError from './CustomError'
export default class ErrorAdapter {
    message : string;
    constructor(message : string) {
        this.message = message
    }


    serialize() {
        // const e =  new CustomError(this.message).serialize()    
        const e = new NewCustomError(this.message).withInfo()
        return e
    }

}