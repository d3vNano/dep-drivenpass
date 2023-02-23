import { Router } from "express"
import { authController } from "../controllers/index.js"
import { validateSchemas } from "../middlewares/validate.middleware.js"

const authRouter = Router()

authRouter.post('/', validateSchemas("auth"), authController.signUp)

export default authRouter