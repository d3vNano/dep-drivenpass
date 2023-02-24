import { prisma } from "../config/index.js";

import { CredentialData } from "../protocols/index.js";

export async function findCredentialTitle(userId: number, title: string) {
    const resultTitle = await prisma.credential.findUnique({
        where: {
            userId_title: { userId, title }
        }
    });
    return resultTitle;
}

export async function createCredential(credential: CredentialData, userId: number) {
    await prisma.credential.create({
        data: { ...credential, userId }
    })
}

export async function listUserCredentials(userId: number) {
    const resultCredentials = await prisma.credential.findMany({
        where: {
            userId
        }
    })

    return resultCredentials
}
