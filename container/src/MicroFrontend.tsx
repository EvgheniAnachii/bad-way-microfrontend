import React from 'react'

class MicroFrontend extends React.Component<any, any> {
  componentDidMount() {
    const {name, host} = this.props
    const scriptId = `micro-frontend-script-${name}`

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend()
      return
    }

    fetch(`${host}/manifest.json`)
      .then((response: any) => response.json())
      .then((manifest: any) => {
        const script = document.createElement('script')
        script.id = scriptId
        script.src = `${host}${manifest['main.js']}`
        document.head.appendChild(script)

        const link = document.createElement('link')
        link.id = scriptId
        link.rel = 'stylesheet'
        link.href = `${host}${manifest['main.css']}`
        document.head.appendChild(link)

        script.onload = this.renderMicroFrontend
      })
      .catch((error: any) => {
        console.error('Error:', error)
      })
  }

  renderMicroFrontend = () => {
    const {name, history} = this.props
    // @ts-ignore
    window[`render${name}`](`${name}-container`, history)
    // E.g.: window.renderBrowse('browse-container', history);
  };

  componentWillUnmount() {
    const {name} = this.props
    // @ts-ignore
    window[`unmount${name}`](`${name}-container`)
  }

  render() {
    return <main id={`${this.props.name}-container`}/>
  }
}

export default MicroFrontend