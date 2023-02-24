import { Router } from "express"

import authRouter from "../routes/auth-router.js"
import credentialsRouter from "../routes/credentials-router.js"
import networksRouter from "./network-router.js"

const router = Router()

router
    .use(authRouter)
    .use(credentialsRouter)
    .use(networksRouter)

export default router