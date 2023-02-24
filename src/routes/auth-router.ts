import { Router } from "express"
import { authController } from "@/controllers"
import { validateSchemas } from "@/middlewares"

const authRouter = Router()

authRouter.post('/signup', validateSchemas("auth"), authController.signUp)
authRouter.post('/', validateSchemas("auth"), authController.signIn)

export default authRouter