import express, {Router} from "express"
import authMiddleware, {Role} from "../middleware/authMiddleware"
import productController from "../controllers/productController"
import { multer, storage} from '../middleware/multerMiddleware'






const uplaod = multer({storage : storage})
const router:Router = express.Router()

router.route("/").post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),
 uplaod.single('image'), productController.addProduct)
 .get(productController.getAllProducts)

module.exports = router
export default router