import express,{  Application, Request, Response } from 'express'
// import DBInstance from './helper/DB'
import bodyParser from 'body-parser'

import Writer from './module/Writer'
import AWSFileWriter from './module/AWSFileWriter'
import DiskFileWriter from './module/DiskFileWriter'

const app = express()

async function start(){

    try{

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended : true}))
        // const db = await DBInstance.getInstance()

        app.post('/activate',async (req : Request,res : Response) => {
            try {

                let size = 1000

                if(size < 1000){
                    const writer = new Writer(new DiskFileWriter())
                    writer.write("file path comes here")
                }
                else{
                    const writer = new Writer(new AWSFileWriter())
                    writer.write("writing the file to the cloud")
                }

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