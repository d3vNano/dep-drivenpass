import { ObjectSchema } from "joi"

export interface AuthBodyIf {
    email: string,
    password: string
}

export interface SchemasIf {
    [key: string]: ObjectSchema
}