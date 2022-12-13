export function last<T>(list: Array<T>) {
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return undefined;
    } else {
      return list[list.length - 1];
    }
  } else {
    return undefined;
  }
}
