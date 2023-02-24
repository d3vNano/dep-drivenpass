import { forbiddenError } from "@/errors/forbidden-error";
import { notFoundError } from "@/errors/not-found-error";
import { NetworkData } from "@/protocols";
import { netwotkRepository } from "@/repositories";
import { cryptographsGeneralPasswords, decryptsPassword } from "@/utils/password-encryption";


export async function createNetwork(network: NetworkData, userId: number) {
    const encryptedPassword = cryptographsGeneralPasswords(network.password)

    await netwotkRepository.createNetwork({ ...network, password: encryptedPassword }, userId)

}

export async function listUserNetworks(userId: number) {
    const networks = await netwotkRepository.listUserNetworks(userId)

    if (!networks) {
        throw notFoundError()
    }

    const decryptedNetwork = networks.map(net => {
        return {
            ...net,
            password: decryptsPassword(net.password)
        }
    })
    return decryptedNetwork
}

export async function listUserNetworksById(networkId: number, userId: number) {
    const network = await netwotkRepository.listUserNetworksById(networkId)

    if (!network) {
        throw notFoundError()
    }

    if (network.userId !== userId) {
        throw forbiddenError()
    }

    const decryptedPassword = decryptsPassword(network.password)
    const decryptedNetwork = { ...network, password: decryptedPassword }

    return decryptedNetwork
}

export async function deleteNetwork(userId: number, networkId: number) {
    const deletedNetwork = await netwotkRepository.listUserNetworksById(networkId)

    if (!deletedNetwork) {
        throw notFoundError()
    }

    if (deletedNetwork.userId !== userId) {
        throw forbiddenError()
    }

    await netwotkRepository.deleteNetwork(deletedNetwork.id)
}