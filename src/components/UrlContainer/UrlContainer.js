import React from 'react';
import './UrlContainer.css';
import UrlCard from '../UrlCard/UrlCard';

const UrlContainer = ({urls, error}) => {
  // const urlList = urls.map(url => {
  //   // return (
  //   //   <div className="url">
  //   //     <h3>{url.title}</h3>
  //   //     <a href={url.short_url} target="blank">{url.short_url}</a>
  //   //     <p>{url.long_url}</p>
  //   //   </div>
  //   // )
  // });

  // const list = urls.map(url => {
  //   console.log('url', url)
  //   return (
  //     <div className='url'>
  //       <h3>{url.title}</h3>
  //       <a href={url.short_url} target="blank">{url.short_url}</a>
  //       <p>{url.long_url}</p>
  //     </div>
  //   )
  // })

  const list = urls.map(url => {
    console.log('url', url)
    return (
      <UrlCard
        key={url.id}
        title={url.title}
        longUrl={url.long_url}
        shortUrl={url.short_url}
      />
    )
  })

  // console.log(urls)

  return (
    <section>
      {/* { urlList.length ? {urlList} : <p>No urls yet! Find some to shorten!</p> } */}
      {list}
      
    </section>
  )
}

export default UrlContainer;
