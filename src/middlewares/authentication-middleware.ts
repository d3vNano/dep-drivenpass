import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
import { loadEnv } from "../config/index.js";
import { unauthorizedError } from "../errors/index.js";
import httpStatus from "http-status";

loadEnv()

export function authentication(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    const token = authorization?.replace('Bearer ', "")

    if (!token) {
        throw res.status(httpStatus.UNAUTHORIZED).send(httpStatus[401])
    }

    const validToken: any = jwt.verify(token, process.env.JWT_SECRET as string)

    res.locals.userId = validToken.id

    next()
}