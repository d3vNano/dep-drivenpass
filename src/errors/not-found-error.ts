import { ApplicationError } from "../interfaces/index.js";

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
