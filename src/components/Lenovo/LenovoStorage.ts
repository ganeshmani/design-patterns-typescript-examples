import IProcessor from '../../Interface/IProcessor'
import IStorage from '../../Interface/IStorage'
export default class LenovoStorage implements IStorage {

    storageSize: number

    constructor(storageSize : number) {
        this.storageSize = storageSize
        console.log(this.storageSize+" GB SSD is used")
    }

    getStorageType() {
        return "SSD"
    }


}