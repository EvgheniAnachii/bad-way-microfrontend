import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const existingElement = document.getElementsByTagName('div')
if(!existingElement.length) {
  const app = document.createElement('div')
  app.setAttribute('id', 'root')
  document.body.appendChild(app)
  const mountNode = document.getElementById('root')
  ReactDOM.render(<App />, mountNode)
}
