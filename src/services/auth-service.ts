import jwt from "jsonwebtoken"

import { authRepository } from "../repositories/index.js";
import { loadEnv } from "../config/envs.js";
import { encryptPassword } from "../utils/password-encryption.js";
import { conflictError } from "../errors/index.js";

loadEnv()

async function createUser(email: string, password: string) {
    const emailExists = await authRepository.findUserEmail(email)

    if (emailExists) {
        throw conflictError("Sorry, wrong email or password. Try again!")
    }

    const encryptedPassword = encryptPassword(password)

    await authRepository.createUser(email, encryptedPassword)
}

export { createUser }