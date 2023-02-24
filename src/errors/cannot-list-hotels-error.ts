import { ApplicationError } from "@/interfaces";

export function cannotListHotelsError(): ApplicationError {
  return {
    name: "CannotListHotelsError",
    message: "Cannot list hotels!",
  };
}
