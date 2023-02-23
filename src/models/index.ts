import { SchemasIf } from "../interfaces/schemas.interface.js"
import { authSchema } from "./auth.schema.js"

const schemas: SchemasIf = {
    "auth": authSchema
}
export { schemas }