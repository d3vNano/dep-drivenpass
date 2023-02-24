import { ApplicationError } from "@/interfaces";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
