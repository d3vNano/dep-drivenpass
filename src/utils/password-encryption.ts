import bcrypt from "bcrypt"
import Cryptr from "cryptr"

import { loadEnv } from "../config/index.js"

loadEnv()

const { CRYPTR_SECRET_KEY } = process.env
const cryptr = new Cryptr(CRYPTR_SECRET_KEY as string)

export function encryptPassword(password: string) {
    const salt: number = Number(process.env.HASH_KEYS)
    const encryptedPassword: string = bcrypt.hashSync(password, salt)

    return encryptedPassword
}

export function comparePassword(password: string, encryptedPassword: string) {
    const comparePass: boolean = bcrypt.compareSync(password, encryptedPassword)

    return comparePass
}

export function cryptographsGeneralPasswords(password: string) {
    const crypts = cryptr.encrypt(password)

    return crypts
}

export function decryptsPassword(password: string) {
    const decrypts = cryptr.decrypt(password)

    return decrypts
}