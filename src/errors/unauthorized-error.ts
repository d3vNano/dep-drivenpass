import { ApplicationError } from "../interfaces/index.js";

export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}
