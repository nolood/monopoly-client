export const createChips = ({count} : {count: number}) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({id: i});
  }
  return result;
}