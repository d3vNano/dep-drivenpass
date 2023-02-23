import { Router } from "express"
import { authController } from "../controllers/index.js"
import { validateSchemas } from "../middlewares/validate.middleware.js"

const authRouter = Router()

authRouter.post('/signup', validateSchemas("auth"), authController.signUp)
authRouter.post('/', validateSchemas("auth"), authController.signIn)

export default authRouter