import { Router } from "express"

import authRouter from "../routes/auth-router.js"

const router = Router()

router.use(authRouter)

export default router



