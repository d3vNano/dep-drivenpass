import { prisma } from "@/config";

import { CredentialData } from "@/protocols";

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

export async function listCredentialById(credentialId: number) {
    const resultCredential = await prisma.credential.findFirst({
        where: {
            id: credentialId
        }
    })

    return resultCredential
}

export async function deleteCredential(credentialId: number) {
    const deletedCredential = await prisma.credential.delete({
        where: {
            id: credentialId
        }
    })
    return deletedCredential
}