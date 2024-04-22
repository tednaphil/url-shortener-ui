import React from 'react';
import './UrlContainer.css';
import UrlCard from '../UrlCard/UrlCard';
// import { ErrorBoundary } from 'react-error-boundary';

const UrlContainer = ({urls, error}) => {

  const list = urls.map(url => {
    // console.log('url', url)
    if (url) {
      return (
        <UrlCard
          key={url.id}
          title={url.title}
          longUrl={url.long_url}
          shortUrl={url.short_url}
        />
      )
    }
  })

  // console.log(urls)

  return (
    <section className='url-container'>
      { list.length ? list : <p>No urls yet! Find some to shorten!</p> }
      {/* {list} */}
    </section>
  )
}

export default UrlContainer;
