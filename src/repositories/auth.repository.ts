import { prisma } from "../config/index.js";

async function createUser(email: string, password: string) {
    await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

async function findUserEmail(email: string) {
    const findEmail = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return findEmail
}

export { createUser, findUserEmail }