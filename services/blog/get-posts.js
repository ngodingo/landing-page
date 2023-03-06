
export function getPostLists () {
  const data = fetch('https://api.medium.com/v1/me')
    .then(response => response.json)
    .then(response => response)

  return data;
}