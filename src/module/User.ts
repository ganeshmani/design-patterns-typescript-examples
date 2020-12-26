import IUser from '../Interfaces/IUser'

export default class User {
    private firstName: string
    private lastName: string
    private bankDetails: string | null
    private age: number
    private role: string
    private isActive: boolean

    constructor({firstName,lastName,bankDetails,age,role,isActive} : IUser){
        this.firstName = firstName
        this.lastName = lastName
        this.bankDetails = bankDetails
        this.age = age
        this.role = role
        this.isActive = isActive
    }

    getBasicInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age : this.age,
            role: this.role
        }
    }

    activateUser() {
        this.isActive = true
    }

    updateBankDetails(bankInfo: string | null) {
        this.bankDetails= bankInfo
    }

    getBankDetails(){
        return this.bankDetails
    }

    deactivateUser() {
        this.isActive = false
    }

    getAllDetails() {
        return this
    }
}