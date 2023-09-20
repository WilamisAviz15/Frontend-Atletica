import { FormErrors } from "../pages/interfaces/auth-register.interface";

let id = 0;
let register = 0;

export const generateId = () => {
  return ++id;
};

export const registerId = () => {
  return `${new Date().getFullYear()}${(++register).toString().padStart(4, "0")}`;
};

export const errorMessages = (errors: FormErrors) =>
  Object.entries(errors)
    .filter(([, fieldErrors]) => fieldErrors.length > 0)
    .map(([field, fieldErrors]) => `${field}: ${fieldErrors.join(", ")}`)
    .join("\n");

export function hasEmptyFields<T extends object>(object: T) {
  return Object.values(object).some((value) => value === "");
}
