export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else if(response.ok) {
          return response.json()
        }
      })
      .catch(err => {
        throw new Error(`Failed to GET - ${err.message}`)
      })
}

export const postUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUrl)
  })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else if(response.ok) {
          return response.json()
        }
      })
      .catch(err => {
        throw new Error(`Failed to POST - ${err.message}`)
      })
}

export default { getUrls, postUrl };
