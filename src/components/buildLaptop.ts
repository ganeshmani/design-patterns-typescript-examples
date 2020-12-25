import LaptopFactory from '../factory/LaptopFactory'
import IProcessor from '../Interface/IProcessor'

export const buildLaptop =  (laptopFactory : LaptopFactory) : IProcessor => {
    const processor = laptopFactory.createProcessor()

    const storage = laptopFactory.createStorage()

    processor.attachStorage(storage)

    return processor
}