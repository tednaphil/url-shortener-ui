export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        throw new Error(`${err}`)
      })
}
