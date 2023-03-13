export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getArrayRandomNumbers = (
  min: number,
  max: number,
  length: number
): number[] => {
  const array: number[] = [];
  while (array.length < length) {
    const randomNumber = getRandomNumber(min, max);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};
