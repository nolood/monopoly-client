export const required = () => {
  return {
    name: 'required',
    validator: (value: string) => Boolean(value),
  };
};
