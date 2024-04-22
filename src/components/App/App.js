import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { ErrorBoundary } from 'react-error-boundary';

function App () {
  const [urls, setUrls] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getUrls()
    // .then(data => setUrls(data))
    // .catch(err => {
    //   setError(err)
    // })
  }, [])

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={urls} error={error}/>
      </main>
    </ErrorBoundary>
  );
}

export default App;
