import { SchemasIf } from "../interfaces/index.js"
import { authSchema } from "./auth.schema.js"

const schemas: SchemasIf = {
    "auth": authSchema
}
export { schemas }