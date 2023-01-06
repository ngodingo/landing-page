
export function tidyTw (objTwClassName) {
  
  // get all object values
  function getAllObjValues (obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        getObjValues(obj[key])
      } else {
        result += obj[key]
        result += ' '
      }
    }
  }

  let result = ''
  
  getAllObjValues(objTwClassName)

  return result;
}


