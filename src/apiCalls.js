export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else if(response.ok) {
          return response.json()
        }
      })
      // .then(data => console.log(data))
      .catch(err => {
        throw new Error(`${err}`)
      })
}
