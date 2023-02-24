import { Router } from "express"
import { networksController } from "../controllers/index.js"
import { validateSchemas, authentication } from "../middlewares/index.js"

const networksRouter = Router()

networksRouter.post('/networks', validateSchemas("network"), authentication, networksController.createNetwork)

export default networksRouter