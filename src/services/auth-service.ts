import jwt from "jsonwebtoken"

import { authRepository } from "@/repositories";
import { loadEnv } from "@/config";
import { comparePassword, encryptPassword } from "@/utils/password-encryption";
import { conflictError, unauthorizedError } from "@/errors";

loadEnv()

export async function createUser(email: string, password: string) {
    const emailExists = await authRepository.findUserEmail(email)

    if (emailExists) {
        throw conflictError("Sorry, wrong email or password. Try again!")
    }

    const encryptedPassword = encryptPassword(password)

    await authRepository.createUser(email, encryptedPassword)
}

export async function loginUser(email: string, password: string) {


    const userData = await authRepository.findUserEmail(email)

    const validEmail = userData?.email
    const validPassword = userData?.password as string

    if (!validEmail || !comparePassword(password, validPassword)) {
        throw unauthorizedError()
    }

    const token = jwt.sign(
        { id: userData.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "6h" }
    )
    return token
}