
export function ttw (...input) {

  let result = ' '
  input.forEach(value => init(value))
  result = result.trim()

  // get all object or array values
  function init (value) {
    if (typeof value === 'object') {
      for (var key in value) {
        init(value[key])
      }
    }
    if (typeof value === 'string') {
      result += value
      result += ' '
    }
  }

  return result
}