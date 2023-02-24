import { prisma } from "@/config";
import { NetworkData } from "@/protocols";

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

export async function listUserNetworksById(networkId: number) {
    const network = await prisma.network.findFirst({
        where: { id: networkId }
    })
    return network
}

export async function deleteNetwork(networkId: number) {
    const deletedNetwork = await prisma.network.delete({
        where: { id: networkId }
    })
    return deletedNetwork
}