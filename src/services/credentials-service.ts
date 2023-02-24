import { conflictError } from "../errors/conflict-error.js";
import { CredentialData } from "../protocols/index.js";
import { credentialRepository } from "../repositories/index.js";
import { cryptographsGeneralPasswords } from "../utils/password-encryption.js";

export async function createCredential(credential: CredentialData, userId: number) {
    const credentialTitle = await credentialRepository.findCredentialTitle(userId, credential.title)

    if (credentialTitle) {
        throw conflictError("This title is already exist")
    }

    const encryptedPassword = cryptographsGeneralPasswords(credential.password)

    await credentialRepository.createCredential({ ...credential, password: encryptedPassword }, userId)

}