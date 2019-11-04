import React, { Component } from 'react';
import './Landing.scss';
import GooglePlayIcon from './GooglePlayIcon';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <header>
          <nav>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <g id="logo" transform="translate(-248 -123)">
                  <path id="Path_68" data-name="Path 68" d="M10,0H38A10,10,0,0,1,48,10V38A10,10,0,0,1,38,48H10A10,10,0,0,1,0,38V10A10,10,0,0,1,10,0Z" transform="translate(248 123)" fill="#005e8d" />
                  <text id="r_Θ" data-name="r∠Θ" transform="translate(256 154)" fill="#fff" fontSize="18" fontFamily="Rubik-Medium, Rubik" fontWeight="500"><tspan x="0" y="0">r</tspan><tspan y="0" fontFamily="SegoeUISymbol, Segoe UI Symbol" fontWeight="400">∠</tspan><tspan y="0" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600">Θ</tspan></text>
                </g>
              </svg>

              CalcEn
            </h1>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <div className="left">
            <h1>Complex Arithmetic made Easy</h1>
            <p>CalcEn is a complex number calculator that handles arithmetic of complex expressions, matrices and functions</p>
            <GooglePlayIcon />
          </div>

          <div className="right">
            <img src="img/phone.png" alt="Phone"/>
          </div>
        </div>
      </div>
    )
  }
}
