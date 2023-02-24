import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
import { loadEnv } from "../config/index.js";
import { unauthorizedError } from "../errors/index.js";

loadEnv()

export function authentication(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    const token = authorization?.replace('Bearer ', "")

    if (!token) {
        throw unauthorizedError()
    }

    const validToken: any = jwt.verify(token, process.env.JWT_SECRET as string)

    res.locals.userId = validToken.id

    next()
}