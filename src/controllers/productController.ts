import { Request, Response } from "express"
import Product from "../database/models/Product"


class ProductController{
    async addProduct(req:Request, res:Response):Promise<void>{
        const {productName, productDescriptionm,productTotalStockQtym, productPrice} = req.body
        let  fileName
        if(req.file){
            fileName = req.file?.filename
        } else {
fileName = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
        }


    if(!productName || !productDescriptionm || !productTotalStockQtym || !productPrice){
        res.status(400).json({
            message : " Please provide every details of prodcuts "
        })
        return
    }
    await Product.create({
        productName, 
        productDescriptionm, 
        productPrice, 
        productTotalStockQtym, 
        imageUrl : fileName
    })
    res.status(200).json({
        mesage : "Proct added succesfuly"
    })
    }
}
export default new ProductController()