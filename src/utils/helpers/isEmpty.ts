export function isEmpty(value: any) {
  if (value === null) return true;
  if (typeof value == "boolean") {
    return value;
  }
  if (typeof value == "number") {
    return true;
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (typeof value === "object") {
    if ("size" in value) {
      return !value.size;
    }
    return !Object.keys(value).length;
  }
  return !value;
}
