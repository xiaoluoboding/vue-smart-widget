// Picks the key-value pairs corresponding to the given keys from an object.
export const pick = (obj, arr) => {
  return arr.reduce((acc, curr) => {
    return (curr in obj && (acc[curr] = obj[curr]), acc)
  }, {})
}

// Maps the values of an array to an object using a function.
export const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr)
    return acc
  }, {})
