import User from '../module/User'


export default class UserFacade{

    protected user: User
    constructor(user : User){
        this.user = user
    }

    activateUserAccount(bankInfo : string){
        this.user.activateUser()
        this.user.updateBankDetails(bankInfo)

        return this.user.getAllDetails()
    }

    deactivateUserAccount(){
        this.user.deactivateUser()
        this.user.updateBankDetails(null)
    }

}