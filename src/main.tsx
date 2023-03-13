// package responsible for the CORE of react
import React from 'react'

// this ReactDOM it's the integration of 'react' and the 'DOM (Document Object Model - representation of our html in JS)' from web 
import ReactDOM from 'react-dom/client'
import { App } from './App'

// this createRoot creates the root of our page in html, receiving the element that represents this root element, 
// that is given by the id 'root' in our case. From now on, React will create all the html, css and JS of our application
// inside of this element with the id 'root' 
ReactDOM.createRoot(document.getElementById('root')!).render(
  //this is a internal flow for react
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
