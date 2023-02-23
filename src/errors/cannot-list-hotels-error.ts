import { ApplicationError } from "../interfaces/index.js";

export function cannotListHotelsError(): ApplicationError {
  return {
    name: "CannotListHotelsError",
    message: "Cannot list hotels!",
  };
}
