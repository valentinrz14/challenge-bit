export const useCreateRandomId = () => {
  const random = Math.random();
  const alphanumeric = random.toString(36);
  const id = alphanumeric.substring(2, 15);
  return { id };
};
