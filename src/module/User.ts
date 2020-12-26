import UserBuilder from './UserBuilder'

export default class User {

    firstName: string
    lastName : string
    gender: string
    age: number
    address: string
    country: string
    isAdmin: boolean

    constructor(builder : UserBuilder) {
        this.firstName = builder.firstName
        this.lastName = builder.lastName
        this.address = builder.address
        this.gender = builder.gender
        this.age = builder.age
        this.country = builder.country
        this.isAdmin = builder.isAdmin
    }

}