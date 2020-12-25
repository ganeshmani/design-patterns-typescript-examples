import LaptopFactory from '../../factory/LaptopFactory'
import MacbookProcessor from './MacbookProcessor'
import MacbookStorage from './MacbookStorage'

export class Macbook implements LaptopFactory {
    storageSize: number;

    constructor(storage : number) {
        this.storageSize = storage
    }

    createProcessor() : any{
        return new MacbookProcessor()
    }

    createStorage(): any {
        return new MacbookStorage(this.storageSize)
    }
}