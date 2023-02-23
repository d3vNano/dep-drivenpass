import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthBodyIf } from "../interfaces/auth.interface.js";
import { authService } from "../services/index.js";

async function signUp(req: Request, res: Response) {
    const { email, password }: AuthBodyIf = req.body

    try {
        await authService.createUser(email, password)

        return res.status(httpStatus.CREATED).send("Successfully created user")
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message)
    }

}

export { signUp }