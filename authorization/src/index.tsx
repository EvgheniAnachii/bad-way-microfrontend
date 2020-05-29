import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles.scss'

// @ts-ignore
window.renderAuthorization = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

// @ts-ignore
window.unmountAuthorization = (containerId: any) => {
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

const existingElement = document.getElementsByTagName('div')

if(!existingElement.length) {
  const app = document.createElement('div')
  app.setAttribute('id', 'app')
  document.body.appendChild(app)
  const mountNode = document.getElementById('app')
  ReactDOM.render(<App history={''} />, mountNode)
}
