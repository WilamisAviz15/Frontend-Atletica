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

export function formatDate(date: Date | string, format: "dash" | "bar"): string {
  let newDate = "";
  const dateObj = new Date(date);
  const dd = dateObj.getDate().toString().padStart(2, "0");
  const mm = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = dateObj.getFullYear().toString();
  switch (format) {
    case "bar":
      newDate = `${dd}/${mm}/${yyyy}`;
      break;
    case "dash":
      newDate = `${yyyy}-${mm}-${dd}`;
      break;
  }

  return newDate;
}

export function formatTime(time: string): string {
  const time_ = time.split(":");
  return `${time_[0]}:${time_[1]}`;
}
