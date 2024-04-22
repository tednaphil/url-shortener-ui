import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { ErrorBoundary } from 'react-error-boundary';

function App () {
  const [urls, setUrls] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(err => {
      setError(err)
    })
  }, [])

  // console.log(urls)

  const addUrl = (newUrl) => {
    postUrl(newUrl)
      .then(data => setUrls([...urls, data]))
      .catch(err => {
        setError(err)
      })
  }

  const removeUrl = (id) => {
    deleteUrl(id)
    getUrls()
      .then(data => setUrls(data.urls))
  }

  return (
    <ErrorBoundary fallback={<div>{`Something went wrong! ${error.message}`}</div>}>
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl} urls={urls}/>
        </header>
        {error ? <div className='error-message'>{`Something went wrong! ${error.message}`}</div> : <UrlContainer urls={urls} error={error} removeUrl={removeUrl}/>}
        {/* <UrlContainer urls={urls} error={error}/> */}
      </main>
    </ErrorBoundary>
  );
}

export default App;
