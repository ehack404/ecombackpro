import express, { Application,Request,Response } from 'express'
const app:Application = express()
const PORT:number= 3001;


import * as dotenv from 'dotenv'
dotenv.config()


import './database/connection'

import userRoute from './Routes/userRoute'
import productRoute from'./Routes/productRoute'
import adminseeder from './adminseeder'
import categoryController from './controllers/categoryController';
app.use(express.json())


//admin seeder 
adminseeder()

app.use ("", userRoute)
app.use("/admin/product", productRoute)

app.listen(PORT,()=>{ 
    categoryController.seedcategory()
    console.log("Server has started at port",PORT);
});