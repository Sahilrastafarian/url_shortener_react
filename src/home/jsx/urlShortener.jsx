import React, { useState, useEffect } from 'react';
import '../css/urlShortener.css'

function UrlShortener(props) {
  const [url, setUrl] = useState("");
  const [displayError, setDisplayError] = useState(false)
  const [displayErrorMessage, setDisplayErrorMessage] = useState("")
  const [alreadyExistsUrl, setAlreadyExistsUrl] = useState("")
  const [alreadyExistsBoolean, setAlreadyExistsBoolean] = useState(false)

  async function handleSubmit(event) {

    event.preventDefault();

    setAlreadyExistsBoolean(false);

    if(url.trim() === "")
    {

      console.log("empty");
      return false;

    }

    const response = await sendRequest();

    if(response.short_url !== undefined)
    {

      props.urlIsGenerated(true);
      props.shortGeneratedUrl(response.short_url);

    }
    else if(response.error !== undefined)
    {

      setDisplayError(true);
      setDisplayErrorMessage(response.error);
      setTimeout(()=>{
        setDisplayError(false);
        setDisplayErrorMessage("");
      },5000);

    }
    else
    {

      setDisplayError(true);
      setDisplayErrorMessage(response.already_exists);
      setAlreadyExistsBoolean(true);
      setAlreadyExistsUrl(response.existing_url);
      setTimeout(()=>{
        setDisplayError(false);
        setDisplayErrorMessage("");
      },5000);
      
    }
  }

  async function sendRequest() {
    const res = await fetch("/",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"url":url}),
    });
    return res.json();
  }

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  return (
    <div>
      {displayError ? <h3 className='error'>{displayErrorMessage}</h3> : ""}
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={handleUrlChange} placeholder='your link goes here...'/>
        </label>
        <button type="submit">Shorten URL</button>
      </form>
      {alreadyExistsBoolean ? <a href={alreadyExistsUrl} target="_blank" rel="noopener noreferrer"><p>{alreadyExistsUrl}</p></a> : ""}
    </div>
  );
}

export default UrlShortener;
