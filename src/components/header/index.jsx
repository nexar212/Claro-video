import React, { Component } from "react";
import image from '../../logo.svg';
import './styles.css'
export default class testComponent extends Component {
  render() {
    return (
      <div className="cont-header">
        <div>
            <img src={image} width={215} height={43}/>
        </div>
        <div className="nav-bar">
            <div>
                Inicio
            </div>
            <div>
                Géneros
            </div>
        </div>
      </div>
    );
  }
}