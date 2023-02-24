import { NetworkData } from "../protocols/index.js";
import { netwotkRepository } from "../repositories/index.js";
import { cryptographsGeneralPasswords } from "../utils/password-encryption.js";


export async function createNetwork(network: NetworkData, userId: number) {
    const encryptedPassword = cryptographsGeneralPasswords(network.network)

    await netwotkRepository.createNetwork({ ...network, password: encryptedPassword }, userId)

}