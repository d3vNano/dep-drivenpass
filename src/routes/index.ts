import { Router } from "express"

import authRouter from "../routes/auth-router.js"
import credentialsRouter from "../routes/credentials-router.js"

const router = Router()

router
    .use(authRouter)
    .use(credentialsRouter)

export default router