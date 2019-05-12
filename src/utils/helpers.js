export const isEmpty = (value, name) => {
  if (!value) {
    return `${name} is required`;
  }
};
