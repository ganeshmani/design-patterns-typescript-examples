
import IStorage from './IStorage'
export default interface IProcessor {
    attachStorage(storage : IStorage) : string

    showSpecs() : string
}