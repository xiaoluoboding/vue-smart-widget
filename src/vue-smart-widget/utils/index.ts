type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T
type AnyObject = { [key: string]: any }

// Picks the key-value pairs corresponding to the given keys from an object.
export const pick = (obj: AnyObject, arr: string[]) => {
  return arr.reduce((acc, curr) => {
    return curr in obj && (acc[curr] = obj[curr]), acc
  }, {} as AnyObject)
}

// Maps the values of an array to an object using a function.
export const mapObject = <T = any>(arr: T[], fn: MapFunc<T>) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr)
    return acc
  }, {} as any)
