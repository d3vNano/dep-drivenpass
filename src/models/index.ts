import { SchemasIf } from "../interfaces/index.js"
import { authSchema } from "./auth.schema.js"
import { credentialSchema } from "./credential.schema.js"

const schemas: SchemasIf = {
    "auth": authSchema,
    "credential": credentialSchema
}
export { schemas }