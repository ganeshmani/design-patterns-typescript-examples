import express,{  Application, Request, Response } from 'express'
import DBInstance from './helper/DB'
import bodyParser from 'body-parser'
import UserFacade from './module/UserFacade'
import User from './module/User'
const app = express()

async function start(){

    try{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended : true}))
        const db = await DBInstance.getInstance()

        app.post('/activate',async (req : Request,res : Response) => {
            try {
                const user = new UserFacade(new User({
                    firstName : "",
                    lastName : "",
                    age : 20,
                    bankDetails : "",
                    isActive : true,
                    role : "ADMIN"
                }))

                const result = user.activateUserAccount("Working")

                console.log("result",result)

                res.status(200).json({ success : true,data:result })
            }
            catch(e){
                console.log(e)
                res.status(500).json({ success : false,data : null })
            }
        })

        app.listen(4000,() => {
            console.log("Server is running on PORT 4000")
        })
    }
    catch(e){
        console.log("Error while starting the server",e)
    }
}

start()