const add: (...nums: number[]) => number = (...nums: number[]): number => nums.reduce((acc, cur) => acc + cur, 0);

const multiply: (...nums: number[]) => number = (...nums: number[]): number => nums.reduce((acc, cur) => acc * cur, 1);

export { add, multiply };
