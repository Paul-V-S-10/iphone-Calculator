import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='app center'>
        <div className="wrapper center">
          <div className="screen">
            12345678901234567890
          </div>
          <div className="keyboard">
            <div className="row">
              <div className="button ash fontBlack">AC</div>
              <div className="button ash fontBlack">+/-</div>
              <div className="button ash fontBlack">%</div>
              <div className="button orange fontWhite">÷</div>
            </div>
            <div className="row">
              <div className="button grey fontWhite">7</div>
              <div className="button grey fontWhite">8</div>
              <div className="button grey fontWhite">9</div>
              <div className="button orange fontWhite">x</div>
            </div>
            <div className="row">
              <div className="button grey fontWhite">4</div>
              <div className="button grey fontWhite">5</div>
              <div className="button grey fontWhite">6</div>
              <div className="button orange fontWhite">-</div>
            </div>
            <div className="row">
              <div className="button grey fontWhite">1</div>
              <div className="button grey fontWhite">2</div>
              <div className="button grey fontWhite">3</div>
              <div className="button orange fontWhite">+</div>
            </div>
            <div className="row">
              <div className="button1 grey fontWhite">0</div>
              <div className="button grey fontWhite">.</div>
              <div className="button orange fontWhite">=</div>
            </div>
          </div>
          <div className="homeButton"></div>
        </div>
      </div>
    )
  }
}
