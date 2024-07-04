import Category from "../database/models/Category"



class CategoryController{
    categoryData = [
    {
        categoryName : "Electronics"

    },
    {
        categoryName : "Groceries"
    },
    {
        categoryName : "Food/Bevereage"
    }
]

async seedcategory():Promise<void>{
    const datas = await Category.findAll()
    if(datas.length === 0 ){
        const data  = await Category.bulkCreate(this.categoryData)
        console.log("Catgeories seeded successfully")

    }else{
        console.log("categories seed already")
    }
}
}

export default new CategoryController()