import express,{  Application, Request, Response } from 'express'
// import DBInstance from './helper/DB'
import bodyParser from 'body-parser'
import Follower from './module/Follower'
import Author from './module/Author'
import Tweet from './module/Tweet'



const app = express()

async function start(){

    try{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended : true}))
        // const db = await DBInstance.getInstance()

        app.post('/activate',async (req : Request,res : Response) => {
            try {

                const follower1 = new Follower("Ganesh")
                const follower2 = new Follower("Doe")

                const author = new Author()

                author.subscribe(follower1)
                author.subscribe(follower2)

                author.sendTweet(
                   new Tweet("Welcome","Bruce Lee")
                )

                res.status(200).json({ success : true,data:null })

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