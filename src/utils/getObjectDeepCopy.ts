export function getObjectDeepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy: any = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    let value = obj[key];

    copy[key] = getObjectDeepCopy(value);
  }

  return copy;
}
