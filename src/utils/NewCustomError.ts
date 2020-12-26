import { start } from "repl"

export default class NewCustomError{

    message : string
    
    constructor(message : string){
        this.message = message    
    }

    withInfo() {
        return { message : this.message } 
    }
}