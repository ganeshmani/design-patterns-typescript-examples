import express,{  Application, Request, Response } from 'express'
import DBInstance from './helper/DB'
import bodyParser from 'body-parser'
const app = express()

async function start(){

    try{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended : true}))
        const db = await DBInstance.getInstance()

        app.get('/todos',async (req : Request,res : Response) => {
            try {
                const db = await DBInstance.getInstance()

                const todos = await db.collection('todo').find({}).toArray()
                res.status(200).json({success : true,data : todos})
            }
            catch(e){
                console.log("Error on fetching",e)
                res.status(500).json({ success : false,data : null })
            }
            
        })

        app.post('/todo',async (req : Request,res : Response) => {
            try {
                const db = await DBInstance.getInstance()

                const todo = req.body.todos
               const todoCollection =  await db.collection('todo').insertOne({ name : todo })

                res.status(200).json({ success : true,data : todoCollection })
            }
            catch(e){
                console.log("Error on Inserting",e)
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