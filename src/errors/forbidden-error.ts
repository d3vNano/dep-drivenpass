import { ApplicationError } from "@/interfaces";

export function forbiddenError(): ApplicationError {
  return {
    name: 'Forbidden',
    message: 'No result for this search!',
  };
}
