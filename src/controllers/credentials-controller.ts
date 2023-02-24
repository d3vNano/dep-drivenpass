import { Request, Response } from "express";
import httpStatus from "http-status";

import { credentialsService } from "../services/index.js";
import { CredentialData } from "../protocols/index.js";

export async function createCredential(req: Request, res: Response) {
    const userId = Number(res.locals.userId)
    const credential: CredentialData = req.body

    try {
        await credentialsService.createCredential(credential, userId)

        res.sendStatus(httpStatus.CREATED)

    } catch (error) {
        res.status(httpStatus.CONFLICT).send(error.message)
    }
}

export async function listUserCredentials(req: Request, res: Response) {
    const userId = Number(res.locals.userId)

    try {
        const userCredentials = await credentialsService.listUserCredentials(userId)
        res.status(httpStatus.OK).send(userCredentials)
    } catch (error) {
        res.status(httpStatus.NOT_FOUND).send(error.message)
    }

}
