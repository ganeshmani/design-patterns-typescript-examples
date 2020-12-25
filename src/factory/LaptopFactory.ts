import IStorage from '../Interface/IStorage'
import IProcessor from '../Interface/IProcessor'


export default interface LaptopFactory {
    createProcessor() : IProcessor

    createStorage() : IStorage
}