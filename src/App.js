import React, {Component} from 'react'
import hljs from 'highlight.js'
import Plot from './Plot'

export default class App extends Component{


  state = {
    text: ""
  }

  constructor (props) {
    super(props)
    hljs.registerLanguage('plot', Plot)
    hljs.configure({
      languages: ['plot']
    })
  }

  componentWillMount(){
    this.update()
  }

  update = () => {
    let apiKey = "AIzaSyDwab0iquar0cu5_C1o1hADrvgIWzEWg0A"
    let fileId = "1ZcLrRQSa7OBazsg356erPk4W6aJX1pb9VCVmpTCPVns"
    let fileType = "text/html"

    fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=${fileType}&key=${apiKey}`)
      .then(resp => resp.text())
      .then(text=>{


        this.setState(
          (prevState)=>{
            return {
              code: {__html: text}
            }
          },
          ()=> {
            let el = document.getElementsByClassName('code')[0]
            hljs.highlightBlock(el)
          }
        )
      })
  }

  render() {
    return (
      <div
        className={"container"}
      >
        <div
          dangerouslySetInnerHTML={this.state.code}
          className={"code"}
        />
      </div>
    )
  }
}
