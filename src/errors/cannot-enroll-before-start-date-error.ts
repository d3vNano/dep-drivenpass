import { ApplicationError } from "../interfaces/index.js";

export function cannotEnrollBeforeStartDateError(): ApplicationError {
  return {
    name: "CannotEnrollBeforeStartDateError",
    message: "Cannot enroll before event start date!",
  };
}
