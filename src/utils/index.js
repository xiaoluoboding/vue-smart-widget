// Picks the key-value pairs corresponding to the given keys from an object.
export const pick = (obj, arr) => {
  return arr.reduce((acc, curr) => {
    return (curr in obj && (acc[curr] = obj[curr]), acc)
  }, {})
}
