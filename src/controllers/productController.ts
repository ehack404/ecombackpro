import {Request, Response } from "express"
import Product from "../database/models/Product"
import { AuthRequest } from "../middleware/authMiddleware"
import User from "../database/models/userModel"
import Category from "../database/models/Category"


class ProductController{
    async addProduct(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id
        const {productName, productDescription,productTotalStockQty, productPrice,categoryId} = req.body
        let fileName
        if(req.file){
            fileName = req.file?.filename
        } else {
fileName = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
        }


    if(!productName || !productDescription || !productTotalStockQty || !productPrice || !categoryId){
        res.status(400).json({
            message : " Please provide every details of prodcuts "
        })
        return
    }
    await Product.create({
        productName, 
        productDescription, 
        productPrice, 
        productTotalStockQty, 
        productImageUrl : fileName,
        userId : userId,
        categoryId : categoryId
    })
    res.status(200).json({
        mesage : "Proct added succesfuly"
    })
    }

    async getAllProducts(req:Request , res:Response):Promise<void>{
        const data = await Product.findAll(
            {   //Gettingrequired detail from different table 
                include : [
                    {
                        model : User,
                        attributes : ['id','email','username']
                    },
                    {
                        model :Category,
                        attributes : ['id','categoryName']
                    }
                ]
            }
        )
        res.status(200).json({
            message : "Products Fetched Succesfullty ",
            data
        })
    }

}

export default new ProductController()