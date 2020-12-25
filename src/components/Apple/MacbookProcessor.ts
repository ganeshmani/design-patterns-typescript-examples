
import IProcessor from '../../Interface/IProcessor'
import IStorage from '../../Interface/IStorage'


export default class MacbookProcessor implements IProcessor {

    storage: string | undefined

    MacbookProcessor() {
        console.log("Macbook is built using apple silicon chips")    
    }

    attachStorage(storageAttached: IStorage) {
        this.storage = storageAttached.getStorageType()
        console.log("storageAttached",storageAttached.getStorageType())
        return this.storage+" Attached to Macbook"
    }
    showSpecs(): string {
        return this.toString()
    }


    toString() : string {
        return "AppleProcessor is created using Apple Silicon and "+this.storage;
    }

}