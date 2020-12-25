import LenovoProcessor from './LenovoProcessor'
import LenovoStorage from './LenovoStorage'
import LaptopFactory from '../../factory/LaptopFactory'

export class Lenovo implements LaptopFactory {
    storageSize: number;

    constructor(storage : number) {
        this.storageSize = storage
    }

    createProcessor() : any{
        return new LenovoProcessor()
    }

    createStorage() {
        return new LenovoStorage(this.storageSize)
    }
}