import { SchemasIf } from "../interfaces/index.js"
import { authSchema } from "./auth.schema.js"
import { credentialSchema } from "./credential.schema.js"
import { networkSchema } from "./network-schema.js"

const schemas: SchemasIf = {
    "auth": authSchema,
    "credential": credentialSchema,
    "network": networkSchema
}
export { schemas }