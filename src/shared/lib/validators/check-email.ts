export const checkEmail = () => {
  return {
    name: 'email',
    validator: (value: string) => /\S+@\S+\.\S+/.test(value),
  };
};
