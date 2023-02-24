import * as jwt from "jsonwebtoken"
import { User } from "@prisma/client"

import { createUser } from "./factories/users-factory"
import { prisma } from "@/config"

export async function cleanDB() {
    await prisma.user.deleteMany({})
    await prisma.credential.deleteMany({})
    await prisma.network.deleteMany({})
}

export async function generateValidToken(user?: User) {
    const incomingUser = user || (await createUser())
    const token = jwt.sign({ userId: incomingUser.password }, process.env.JWT_SECRET, { expiresIn: "1h" })

    return token
}
