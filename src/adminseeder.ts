import { where } from "sequelize"
import User from "./database/models/userModel"
import bcrypt from 'bcrypt'

const adminseeder = async():Promise<void>=>{
  const [data]=  await User.findAll({
        where:{
            email:"p2admin@gmail.com"        }
    })
    if(!data){
        await User.create({
            email : "p2admin@gmail.com",
            password : bcrypt.hashSync("p2password",8),
            username : "p2admin",
            role : "admin"
        })
        console.log("Admin is herer")
    }else{
        console.log("admin creden tial already seeded")
    }

}

export default adminseeder