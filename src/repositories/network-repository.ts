import { prisma } from "../config/index.js";
import { NetworkData } from "../protocols/index.js";

export async function createNetwork(network: NetworkData, userId: number) {
    await prisma.network.create({
        data: { ...network, userId }
    })
}