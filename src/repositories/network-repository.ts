import { prisma } from "../config/index.js";
import { NetworkData } from "../protocols/index.js";

export async function createNetwork(network: NetworkData, userId: number) {
    await prisma.network.create({
        data: { ...network, userId }
    })
}

export async function listUserNetworks(userId: number) {
    const networks = await prisma.network.findMany({
        where: { userId }
    })
    return networks
}