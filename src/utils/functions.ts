export const getFirstElementOfArray = <T>(array: T[]): T | undefined => {
  return array[0];
};

export const isEven = (arg: number) => {
  return arg % 2 === 0;
};

export const isOdd = (arg: number) => {
  return arg % 2 !== 0;
};
