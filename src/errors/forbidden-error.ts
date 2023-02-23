import { ApplicationError } from "../interfaces/index.js";

export function forbiddenError(): ApplicationError {
  return {
    name: 'Forbidden',
    message: 'No result for this search!',
  };
}
