import { Router } from "express"

import authRouter from "./auth-router"
import credentialsRouter from "./credentials-router"
import networksRouter from "./network-router"

const router = Router()

router
    .use(authRouter)
    .use(credentialsRouter)
    .use(networksRouter)

export default router