
export function tidyTw (objTwClassName) {
  
  function getObjValues (obj) {
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
  getObjValues(objTwClassName)

  return result;
}


