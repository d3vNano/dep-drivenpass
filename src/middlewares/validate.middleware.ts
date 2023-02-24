import { Response, Request, NextFunction } from "express";
import { schemas } from "../models/index.js";

export function validateSchemas(schema: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schemas[schema].validate(req.body, { abortEarly: false })

        if (error) {
            return res.status(422).send(error.details.map(details => details.message))
        }

        return next()
    }
}