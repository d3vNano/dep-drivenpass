import { ApplicationError } from "../interfaces/index.js";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
