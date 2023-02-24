import { Router } from "express"

import { validateSchemas, authentication } from "../middlewares/index.js"
import { credentialsController } from "../controllers/index.js"


const credentialsRouter = Router()

credentialsRouter.post('/credentials', validateSchemas("credential"), authentication, credentialsController.createCredential)
credentialsRouter.get("/credentials", authentication, credentialsController.listUserCredentials)

export default credentialsRouter