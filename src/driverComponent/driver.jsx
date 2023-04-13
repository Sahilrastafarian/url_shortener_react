import React, { useState } from 'react';
import UrlShortener from '../home/jsx/urlShortener';
import ShortenedUrl from '../shortUrlView/jsx/displayShortUrl';

function driver() {
    const [urlGenerated, setUrlGenerated] = useState(false);
    const [shortenedUrl, setShortenedUrl] = useState("");
    return (
        <>
            { urlGenerated ? <ShortenedUrl shortGeneratedUrl={shortenedUrl} backToHome={setUrlGenerated}/> : <UrlShortener urlIsGenerated={setUrlGenerated} shortGeneratedUrl={setShortenedUrl}/> }
        </>
    )
}

export default driver