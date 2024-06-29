
import { Request, Response } from "express"
import User from "../database/models/userModel"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

class AuthController{
 public static async registerUser(req:Request,res:Response): Promise<void>{
       
    
    
    const {username, email, password,role} = req.body
        if(!username || !email || !password){
            res.status(400).json({
            message : "Please provide user credentials"
           })
           return
        }
        await User.create({
            username,
            email,
            password : bcrypt.hashSync(password,12),
            role : role
            
        })
        res.status(200).json({
            message :"User register Successfully"
        })
    
}

    public static async loginUser(req:Request, res:Response) : Promise<void>{
        //user input 
        const {email,password} = req.body
        if(!email || !password ){
            res.status(400).json({
                message : "ENter email and password"
            })
            return  
        }
        //check whether user with 
        const [data] = await User.findAll({
            where : {
                email : email
            }
        })
        if(!data){
            res.status(404).json({
                message : "No user with that email"
            })
            return
        }
        

        //check pw too 
        const isMatched = bcrypt.compareSync(password,data.password)
        if(!isMatched){
            //generate token and sent to user 
            res.status(403).json({
                message : "Invalid email or password"
            })
                return
        }  
          
        
           //generate token
          const token =  jwt.sign({id:data.id},"hahaha",{
                expiresIn : "20d"
            })
            res.status(200).json({
                message: " Token aayo hain",
                data:token
            })


    }
}
export default AuthController  