import React from 'react';
import './UrlCard.css';


function UrlCard({title, shortUrl, longUrl, id, removeUrl}) {
    return (
        <div className='url'>
            <h3>{title}</h3>
            <a href={shortUrl} target="blank">{shortUrl}</a>
            <hr/>
            <p>{longUrl}</p>
            <button className='delete-button' onClick={() => {
                removeUrl(id)
            }}>🪄</button>
        </div>
    )
}

export default UrlCard