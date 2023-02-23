import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

function connectDB(): void {
    prisma = new PrismaClient();
}

async function disconnectDB(): Promise<void> {
    await prisma?.$disconnect();
}

export { prisma, connectDB, disconnectDB };
