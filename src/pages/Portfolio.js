import React, { Component } from "react";
import PortfolioEntries from "../components/PortfolioEntries";
import chiSqrtCover from "../images/Portfolio/ChiSqrt/ChiSqrtCover.jpeg";
import SRECover from "../images/Portfolio/SRE/Data.png";

import "./styles/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="container">
          <div className="row">
            <div className="Portfolio__col col-12 col-md-8">
              <ul>
                <li>
                  <PortfolioEntries
                    link="chiSqrt"
                    cover={chiSqrtCover}
                    title="Chi Test"
                    description="Prueba de Chi cuadrada para numeros random de 0 a 1"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <PortfolioEntries
                    link="sreExcel"
                    cover={SRECover}
                    title="Control de pasaportes"
                    description="Sistema de control de pasaportes mexicanos en la ome Caborca"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
