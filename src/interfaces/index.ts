import { ObjectSchema } from "joi"

export type ApplicationError = {
    name: string;
    message: string;
};

export interface AuthBodyIf {
    email: string,
    password: string
}

export interface SchemasIf {
    [key: string]: ObjectSchema
}

export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
};