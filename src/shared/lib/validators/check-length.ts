export const checkLength = (min: number, max: number) => {
  return {
    name: 'length',
    validator: (value: string) => {
      if (value.length > min && value.length < max) {
        return true;
      }
      return false;
    },
  };
};
