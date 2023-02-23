import { ApplicationError } from "../protocols/index.js";

export function conflictError(message: string): ApplicationError {
    return {
        name: "ConflictError",
        message,
    };
}
