
export function getKind (value, source) {

  for (var key in source) {
    if (key === value) {
      return source[key]
    }
  }
  // return default kind
  return Object.values(source)[0]
}

/*
  usage:
  className={getKind('kind', source)}
*/