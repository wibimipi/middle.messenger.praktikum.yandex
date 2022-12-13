import { range } from "./range";

export const rangeRight = (start: number, end: number, step: number) => {
  return range(start, end, step, true);
};
