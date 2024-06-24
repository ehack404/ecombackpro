import express, { Application,Request,Response } from 'express'
const app:Application = express()
const PORT:number= 3001;


import * as dotenv from 'dotenv'
dotenv.config()


import './database/connection'

import userRoute from './Routes/userRoute'
app.use(express.json())
app.use ("", userRoute)
app.listen(PORT,()=>{ 
    console.log("Server has started at port",PORT);
});