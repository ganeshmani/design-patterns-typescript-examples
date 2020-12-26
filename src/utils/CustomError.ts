
// export abstract class CustomError extends Error {
//     abstract statusCode: number;
//     constructor(public message: string) {
//       super(message);
//       Object.setPrototypeOf(this, CustomError.prototype);
//     }
  
//     abstract serializeError(): { message: string; field?: string }[];
//   }
import IError from '../interface/IError'
export default class CustomError implements IError{

    message : string

    constructor(message : string){
        this.message = message
    }

    serialize() {
        return this.message
    }
}