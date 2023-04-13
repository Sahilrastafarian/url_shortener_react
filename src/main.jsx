import React from 'react'
import ReactDOM from 'react-dom/client'
import Driver from './driverComponent/driver'
import './mainJsx.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='header-message'>
      <p>The url you enter should be absolute for example https://google.com or http://google.com.</p>
      <p>This will raise an error if not written in the start of url</p>
    </div>
    <Driver/>
    <div className='footer-message'>
      <p>This website can be only used to shorten the links provided by the user.</p>
      <p> This website does not validate the links provided as input if they are valid links or not.</p>
    </div>
  </>,
)
