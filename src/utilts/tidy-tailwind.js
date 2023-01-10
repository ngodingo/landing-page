
export function tidyTw (input) {
  
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

  // remove line breaks, extra spaces, '== ' and 'undefined'
  function tidyUpString (str) {
    return str
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/\s+/g, ' ').trim()
      .replace(/== /g, '')
      .replace(/undefined/g, '')
  }


  // EXEC
  if (typeof input === 'string' || input instanceof String) {
    return tidyUpString(input)
  }

  let result = ''

  getAllObjValues(input)
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
          == value
          md:value
          xl:value
        `,
      })} 
    >
      hello world
    </div>
*/