import IProcessor from '../../Interface/IProcessor'
import IStorage from '../../Interface/IStorage'

export default class LenovoProcessor implements IProcessor {

    storage: string | undefined

    constructor() {
        console.log("Macbook is built using apple silicon chips")    
    }

    attachStorage(storageAttached: IStorage) {
        this.storage = storageAttached.toString()
        return this.storage+" Attached to Lenovo Laptop"
    }
    showSpecs(): string {
        return this.toString()
    }


    toString() : string {
        return "LenovoProcessor is created using Intel Processor and "+this.storage;
    }

}