import React from 'react';
import '../css/displayShortUrl.css'

function ShortenedUrl(props) {
  function backToHomePage()
  {
    props.backToHome(false);
  }
  return (
    <div>
      <h1>Shortened URL</h1>
      <p>Here is your shortened URL: {props.shortGeneratedUrl}</p>
      <a href={props.shortGeneratedUrl} target="_blank" rel="noopener noreferrer">{props.shortGeneratedUrl}</a>
      <button onClick={backToHomePage}>Go back to home</button>
    </div>
  );
}

export default ShortenedUrl;
