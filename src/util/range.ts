export function range(start: number, end: number, step: number = 1, fromRight: boolean = false) {
  var index = -1,
    length = Math.max(Math.ceil((end - start) / step), 0),
    result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
};
