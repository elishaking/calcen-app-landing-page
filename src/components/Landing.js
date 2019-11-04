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

            <div id="g-play">
              <a href="https://play.google.com/store/apps/details?id=com.apps.king.complex_cal_cen" rel="noopener noreferrer" target="_blank">
                <GooglePlayIcon />
              </a>
            </div>

            <div>
              <a href="https://facebook.com/ComplexCalculator" rel="noopener noreferrer" target="_blank">
                <svg id="Group_63" data-name="Group 63" xmlns="http://www.w3.org/2000/svg" width="45.026" height="45.026" viewBox="0 0 45.026 45.026">
                  <g id="facebook" transform="translate(16.279 10.391)">
                    <path id="f_1_" d="M45.462,24.245V13.186h3.71l.557-4.311H45.462V6.124c0-1.248.345-2.1,2.136-2.1H49.88V.169A30.927,30.927,0,0,0,46.555,0c-3.291,0-5.544,2.009-5.544,5.7V8.875H37.29v4.311h3.722V24.245Z" transform="translate(-37.29)" fill="#005e8d" />
                  </g>
                  <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(0 0)" fill="none" stroke="#005e8d" stroke-width="3">
                    <circle cx="22.513" cy="22.513" r="22.513" stroke="none" />
                    <circle cx="22.513" cy="22.513" r="21.013" fill="none" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="right">
            <div>
              <img src="img/phone.png" alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
