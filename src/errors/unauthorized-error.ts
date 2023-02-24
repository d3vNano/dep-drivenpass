import { ApplicationError } from "@/interfaces";

export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}
