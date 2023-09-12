let id = 0;
let register = 0;

export const generateId = () => {
  return ++id;
};

export const registerId = () => {
  return `${new Date().getFullYear()}${(++register).toString().padStart(4, "0")}`;
};
