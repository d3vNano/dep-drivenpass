import { prisma } from "../config/index.js";

export async function createUser(email: string, password: string) {
    await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

export async function findUserEmail(email: string) {
    const findEmail = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return findEmail
}