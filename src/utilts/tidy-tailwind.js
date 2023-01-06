
export function tidyTw (objTwClassName) {
  
  // get all object values
  function getAllObjValues (obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        getAllObjValues(obj[key])
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



/* 
  TIDY-TAILWIND
  tidy up tailwind className

  - usage:
    <div className={tidyTw({
      key: value,
      key: value,
      key: {
        key: value,
        key: value,
      }
    })} 
    >hello world</div>
*/