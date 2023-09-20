import { FormErrors } from "../pages/interfaces/auth-register.interface";

let id = 0;
let register = 0;

export const generateId = () => {
  return ++id;
};

export const registerId = () => {
  return `${new Date().getFullYear()}${(++register).toString().padStart(4, "0")}`;
};

export const isFormErrors = (obj: FormErrors | { error: string }): obj is FormErrors => {
  return !("error" in obj);
};

export const errorMessages = (errors: FormErrors | { error: string }) => {
  if (isFormErrors(errors)) {
    return Object.entries(errors)
      .filter(([, fieldErrors]) => fieldErrors.length > 0)
      .map(([field, fieldErrors]) => `${field}: ${fieldErrors.join(", ")}`)
      .join("\n");
  } else {
    return errors.error;
  }
};

export function hasEmptyFields<T extends object>(object: T) {
  return Object.values(object).some((value) => value === "");
}
