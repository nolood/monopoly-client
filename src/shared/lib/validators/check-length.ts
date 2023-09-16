export const checkLenght = (min: number, max: number) => {
  return {
    name: 'required',
    validator: (value: string) => {
      if (value.length > min && value.length < max) {
        return true;
      }
      return false;
    },
  };
};
