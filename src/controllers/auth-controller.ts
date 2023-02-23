import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthBodyIf } from "../interfaces/index.js";
import { authService } from "../services/index.js";

async function signUp(req: Request, res: Response) {
    const { email, password }: AuthBodyIf = req.body

    try {
        await authService.createUser(email, password)

        res.status(httpStatus.CREATED).send("Successfully created user")
    } catch (error) {
        res.status(httpStatus.CONFLICT).send(error.message)
    }

}

export { signUp }