import { SchemasIf } from "@/interfaces"
import { authSchema } from "./auth.schema"
import { credentialSchema } from "./credential.schema"
import { networkSchema } from "./network-schema"

const schemas: SchemasIf = {
    "auth": authSchema,
    "credential": credentialSchema,
    "network": networkSchema
}
export { schemas }