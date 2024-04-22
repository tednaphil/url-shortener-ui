import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { ErrorBoundary } from 'react-error-boundary';

function App () {
  const [urls, setUrls] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getUrls()
    // .then(data => console.log(data.urls))
    .then(data => setUrls(data.urls))
    .catch(err => {
      setError(err)
    })
    // console.log(urls)
    // console.log(error)
  }, [])

  // console.log(urls)

  const addUrl = (newUrl) => {
    postUrl(newUrl)
      .then(data => setUrls([...urls, data]))
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrl={postUrl} addUrl={addUrl}/>
        </header>

        <UrlContainer urls={urls} error={error}/>
      </main>
    </ErrorBoundary>
  );
}

export default App;
