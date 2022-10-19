export function first<T>(list: Array<T>) {
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return undefined;
    } else {
      return list[0];
    }
  } else {
    return undefined;
  }
}
