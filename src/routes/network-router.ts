import { Router } from "express"
import { networksController } from "../controllers/index.js"
import { validateSchemas, authentication } from "../middlewares/index.js"

const networksRouter = Router()

networksRouter.post('/networks', validateSchemas("network"), authentication, networksController.createNetwork)
networksRouter.get('/networks', authentication, networksController.listUserNetworks)
networksRouter.get('/networks/:id', authentication, networksController.listUserNetworksById)

export default networksRouter