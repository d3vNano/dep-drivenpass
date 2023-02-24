import { Router } from "express"

import { validateSchemas, authentication } from "@/middlewares"
import { credentialsController } from "@/controllers"


const credentialsRouter = Router()

credentialsRouter.post('/credentials', validateSchemas("credential"), authentication, credentialsController.createCredential)
credentialsRouter.get("/credentials", authentication, credentialsController.listUserCredentials)
credentialsRouter.get("/credentials/:id", authentication, credentialsController.listCredentialById)
credentialsRouter.delete("/credentials/:id", authentication, credentialsController.deleteCredential)

export default credentialsRouter