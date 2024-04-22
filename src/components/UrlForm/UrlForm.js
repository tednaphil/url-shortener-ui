import React, { useEffect, useState } from 'react';

function UrlForm({ addUrl, urls }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length && urlToShorten.length > 8) {
      const urlSubmission = makeRequestBody()
      // console.log(urlSubmission)
      addUrl(urlSubmission)
      clearInputs();
    } else {
      setError('Please complete the form')
    }
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  const makeRequestBody = () => {
    return {
      long_url: urlToShorten,
      title,
    }
  }

  useEffect(() => {
    setError('')
  }, [urls])

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
      {error && <h2>Please complete the form</h2>}
    </form>
  )
}

export default UrlForm;
