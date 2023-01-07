
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

  // remove line breaks and extra spaces
  function tidyUpString (str) {
    return str
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/\s+/g, ' ').trim()
  }


  // exec
  let result = ''

  getAllObjValues(objTwClassName)
  result = tidyUpString(result)

  return result;
}



/* 
  TIDY-TAILWIND
  tidy up tailwind className

  - usage:
    <div 
      className={tidyTw({
        key: value,
        key: value,
        key: {
          key: value,
          key: value,
        },
        key: `
          value
          value
        `,
      })} 
    >
      hello world
    </div>
*/